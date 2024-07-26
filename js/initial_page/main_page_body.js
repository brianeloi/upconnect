import { formContent } from '../../js/form_page/form_content.js'

export const mainPageBody = () => {

    let body =  '<div class="main_page_body">' +
                    /*'<div class="base_font_color main_page_links">' +
                        '<a href="https://www.instagram.com/upconnectweb/" target="_blank">'+
                            'Instagram'+
                        '</a>' +
                    '</div>' +*/
                    '<div class="first_page_left_container">'+
                        '<div class="main_page_title base_font_color">Transforme sua <br>Presença Digital</div>'+
                        '<div class="main_page_text base_font_color">' +
                            'No mundo atual ter uma presença online robusta e <br>'+
                            'eficiente é crucial para o sucesso de qualquer <br>'+
                            'negócio. Estamos aqui para ajudar sua empresa a <br>'+
                            'se destacar e crescer neste cenário competitivo.' +
                        '</div>' +
                        '<div class"first_page_buttons">'+
                            '<button class = "btn btn_pink_full">Fale com um especialista</button>'+
                            '<button class = "btn btn_pink_empty">Nossos Serviços</button>'+
                        '</div>'+
                    '</div>'+
                    '<div class="first_image_container">'+
                        '<img class="first_image" src="images/cyber2077boy.png" alt="cyber boy">'
                    '</div>'+
                '</div>'

    let body2 = '<div class="main_page_body2">' +
                    '<div class="second_sector_title base_pink_font">UpConnect, a sua software house</div>'+
                    '<div class="second_sector_text base_font_color">' +
                        'Aqui combinamos expertise técnica com criatividade para oferecer soluções digitais<br>'+
                        'que transformam a maneira como você faz negócios.' +
                    '</div>' +
                    '<div class="">'+
                        
                    '</div>'+
                '</div>'

    return body + body2
}
