import { headerPage } from '../../js/page_basics/header_page.js'
import { mainPageBody } from '../../js/initial_page/main_page_body.js'
import { switchPage } from '../../modules/switch_page.js'
import { formPage } from '../../js/form_page/form_page.js'
import { callCss } from '../../modules/call_css.js'

export const mainPage = () => {
  callCss('main_page')
  callCss('form_content')
  const formButtonFunction = () => {
    switchPage({ newPage: formPage, params: {formParams: { question: 'number' }} })
  }

  let header = headerPage()
  let body   = mainPageBody({ formButtonFunction, formParams: { question: 'name' } })
  let main_page = header + body

  $('#fullscreen').append(main_page)
  dispatchEvent(new Event('load'));

  //switchPage({ newPage: formPage, params: {formParams: { question: 'email' }} }) //TAKE IT OFF
  window.onload = initPage;
  function initPage(){
    const faqs = document.getElementsByClassName('faq_question')
    
    for (let i = 0; i < faqs.length; i++) {
      let faq = faqs[i]
      faq.addEventListener('click', () => {
        let faq_answer = faq.childNodes[2]
        if(faq_answer.style.display == 'block') {
          faq_answer.style.display="none";
        } else {
          faq_answer.style.display="block";
        }

        let faq_plus_x = faq.childNodes[1]
        if(faq_answer.style.display == 'block') {
          faq_plus_x.style.transform="rotate(45deg)";
        } else {
          faq_plus_x.style.transform="none";
        }
      })
    }
  }
}