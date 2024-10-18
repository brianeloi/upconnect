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
    const main_title = document.getElementsByClassName("main_page_title")[0]
    const faqs = document.getElementsByClassName('faq_question')
    const more_faqs_link = document.getElementById('more_faqs_link')
    const typing_div = '<div class="main_page_title typing_tick">|</div>'

    if(main_title) {
      const text = main_title.getAttribute('value')
      let j = 0
      for (let i = 0; i < text.length; i++) {
        if(text[i] == '<') {
          i += 3
          continue;
        } else if(text[i] == ' '){
          continue;
        } else {
          j++
          setTimeout(function(){
            main_title.innerHTML = text.slice(0, 1 + i)
            $('#main_page_title').append(typing_div)
            const typing_tick = document.getElementsByClassName('typing_tick')[0]
            if(typing_tick && i == text.length - 1) {
              setInterval(function () {
                if(typing_tick.style.display == 'inline-block') {
                  typing_tick.style.display="none";
                } else {
                  typing_tick.style.display="inline-block";
                }
              }, 400)
            }
          }, 100*j);
        }
      }
    }
    
    if (faqs) {
      for (let i = 0; i < faqs.length; i++) {
        let faq = faqs[i]
        faq && faq.addEventListener('click', () => {
          let faq_answer = faq.childNodes[2]
          if(faq_answer) {
            if(faq_answer.style.display == 'block') {
              faq_answer.style.display="none";
            } else {
              faq_answer.style.display="block";
            }
          }
  
          let faq_plus_x = faq.childNodes[1]
          if(faq_plus_x) {
            if(faq_answer.style.display == 'block') {
              faq_plus_x.style.transform="rotate(45deg)";
            } else {
              faq_plus_x.style.transform="none";
            }
          }
        })
      }
    }

    more_faqs_link && more_faqs_link.addEventListener('click', () => {
      if(more_faqs_link.textContent == 'CLIQUE AQUI!') {
        more_faqs_link.textContent="mostrar menos";
      } else {
        more_faqs_link.textContent='CLIQUE AQUI!';
      }

      const more_faqs = document.getElementsByClassName('more_faqs')
      for (let i = 0; i < more_faqs.length; i++) {
        const extra_faq = more_faqs[i]
        if(extra_faq.style.display == 'block') {
          extra_faq.style.display="none";
        } else {
          extra_faq.style.display="block";
        }
      }
    })
  }
}