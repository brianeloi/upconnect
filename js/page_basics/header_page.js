import { callCss } from '../../modules/call_css.js'
import { vectorLogo } from '../../images/vector_logo.js'

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
    }

    callCss('header_page')

    let header =    '<header id="header" class="header base_bg">' + 
                        '<div id=header_text class="base_font_color header_text">' +
                            vectorLogo +
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
                    '</header>'

    return header
}
