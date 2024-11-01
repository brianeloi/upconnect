import { headerPage } from '../../js/page_basics/header_page.js'
import { mainPageBody } from '../../js/initial_page/main_page_body.js'
import { faqPageBody } from '../faq_page_body/faq_page_body.js'

export const mainPage = () => {
  const pageContent = document.getElementById('fullscreen')
  const pageToLoad = localStorage.getItem('page')
  let pageBodyFunction = mainPageBody

  if (pageToLoad == 'faq') {
    pageBodyFunction = faqPageBody
  }

  let { header, darkLightFuncHeader } = headerPage()
  let { body, darkLightFuncBody }     = pageBodyFunction()
  let main_page                       = header + body

  pageContent.innerHTML = ''
  $('#fullscreen').append(main_page)
  dispatchEvent(new Event('load'));

  window.onload = initPage;
  function initPage(){
    const btn = document.querySelector(".theme-switch input");

    let modeDefined = localStorage.getItem('mode')
    if (modeDefined == 'light'){
      darkLightFuncBody('light')
      darkLightFuncHeader('light')
    } else {
      darkLightFuncBody('dark')
      darkLightFuncHeader('dark')
    }

    btn.addEventListener("click", () => { 
      modeDefined = localStorage.getItem('mode')
      if (modeDefined == 'light'){
        localStorage.setItem('mode', 'dark')
        darkLightFuncBody('dark')
        darkLightFuncHeader('dark')
      } else {
        localStorage.setItem('mode', 'light')
        darkLightFuncBody('light')
        darkLightFuncHeader('light')
      }
    })

    //resets document.documentElement.classList structure
    btn.click()
    btn.click()
  }
}