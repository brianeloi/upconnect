import { callCss } from '../../modules/call_css.js'
import { vectorLogo } from '../../images/vector_logo.js'
import { vectorLogoLight } from '../../images/vector_logo_light.js'
import { vectorMoon } from '../../images/vector_moon.js'
import { vectorSun } from '../../images/vector_sun.js'

export const headerPage = () => {
    window.onload = initPage;
    function initPage(){
      const btn_to_section = {
        "home": "header", "about_us": "discription", "services": "our_services",
        "contact": "budget", "link_back": "header", "services2": "our_services"
      }
      Object.keys(btn_to_section).forEach(btn_id => {
        document.getElementById(btn_id).onclick = function(event) {
          document.getElementById(btn_to_section[btn_id]).scrollIntoView();
        }
      });

      const btn = document.querySelector(".theme-switch input");
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      const headerLogoDiv = document.getElementById("header_text")
      let classList = document.documentElement.classList
      let modeDefined = classList[classList.length - 1]
      
      if (prefersDarkScheme.matches) {
        document.documentElement.classList.toggle("dark");
        headerLogoDiv.innerHTML = vectorLogo
      } else {
        document.documentElement.classList.toggle("light");
        headerLogoDiv.innerHTML = vectorLogoLight
      }
      btn.addEventListener("click", () => {
        classList = document.documentElement.classList
        modeDefined = classList[classList.length - 1]
        if (modeDefined == 'light'){
          headerLogoDiv.innerHTML = vectorLogo
        } else {
          headerLogoDiv.innerHTML = vectorLogoLight
        }

        if (prefersDarkScheme.matches) {
          document.documentElement.classList.toggle("light");
        } else {
          document.documentElement.classList.toggle("dark");
        }
      });
    }

    callCss('header_page')

    let header =    '<header id="header" class="header base_bg">' + 
                        '<div id="header_text" class="base_font_color header_text">' +
                        '</div>' +
                        '<div id="home" class="base_font_color header_menu header_menu_item1">' +
                            'Home' +
                        '</div>' +
                        '<div id="about_us" class="base_font_color header_menu header_menu_item2">' +
                            'Sobre nós' +
                        '</div>' +
                        '<div id="services" class="base_font_color header_menu header_menu_item3">' +
                            'Serviços' +
                        '</div>' +
                        '<div id="contact" class="base_font_color header_menu header_menu_item4">' +
                            'Contato' +
                        '</div>' +
                        '<div class="theme-switch header_menu_item5">'+
                        '  <input type="checkbox" class="checkbox" id="checkbox" />'+
                        '  <label for="checkbox" class="label">'+
                        '    <svg class="moon" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                        '      <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '    </svg>'+
                        '    <svg class="sun" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                        '      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '      <path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '      <path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '      <path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '      <path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '      <path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '      <path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '      <path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '      <path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>'+
                        '    </svg>'+
                        '    <div class="ball"></div>'+
                        '  </label>'+
                        '</div>'+
                    '</header>'

    return header
}
