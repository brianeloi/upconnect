import { vectorBackButton } from '../../images/vector_back_button.js'

export const budgetPageBody = () => {
    const darkLightFunc = (mode) => {

    }

    const initPage = () => {
        let page_back_btn = document.getElementById('page_back')
        page_back_btn && page_back_btn.addEventListener('click', () => {
            localStorage.setItem('page', '')
            location.reload()
            window.scrollTo(0, 0);
        })
    }

    let whatsapp_link = 'https://api.whatsapp.com/send?phone=5511989213124&text=Ol%C3%A1,%20gostaria'+
                        '%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20'+
                        'da%20UpConnect'
    
    let back_btn = '<div class="links_and_back">'+
                    '<div id="page_back" class="link_back">'+
                        vectorBackButton +
                    '</div>'+
                    '<div class="media_links">'+
                        '<a href="https://www.instagram.com/upconnectweb" target="_blank">'+
                            '<img src="images/insta.png" alt="instagram" width="33" height="33">' +
                        '</a><br>'+
                        '<a href="https://www.facebook.com" target="_blank">'+
                            '<img src="images/face.png" alt="instagram" width="33" height="33">' +
                        '</a><br>'+
                        '<a href="'+ whatsapp_link +'" target="_blank">'+
                            '<img src="images/whats.png" alt="instagram" width="33" height="33">' +
                        '</a>'+
                    '</div>'+
                    '<div id="link_back" class="up_link">'+
                        '<img src="images/seta_rosa.png" alt="instagram" width="50" height="50">' +
                    '</div>'+
                '</div>'
    
    let body1 =
    '<div class="main_page_faq main_page_sector_faq">' +
        '<div class="second_sector_title base_pink_font">Orçamento Online</div>'+
        '<div class="main_page_text second_sector_text base_font_color">' +
            'Personalize seu orçamento ou escolha entre nossos pacotes simplificados' +
        '</div>'+
    '</div>'

    let footer = '<div class="main_page_footer">'+
                    '<div class="main_page_footer_title">'+
                        'UpConnect'+
                    '</div>'+
                    '<div class="main_page_footer_last_line">'+
                        '© 2024 All Rights Reserved'+
                    '</div>'+
                    '<div class="main_page_footer_contact">'+
                        '<div class="main_page_footer_contact_title">'+
                            'Nosso contato'+
                        '</div>'+
                        '<div class="main_page_footer_contact_number">'+
                            '+55 11 <b style="font-size: 22px">98921-3124</b>'+
                        '</div>'+
                        '<div class="main_page_footer_contact_email">'+
                            'upconnectweb@gmail.com'+
                        '</div>'+
                    '</div>'+
                '</div>'

    const body = back_btn + body1 + footer

    return { body: body, darkLightFuncBody: darkLightFunc, bodyInitFunction: initPage }
}