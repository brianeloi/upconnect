import { vectorWorldConnection } from '../../images/vector_world_connection.js'
import { vectorRocketTeam } from '../../images/vector_rocket_team.js'
import { vectorECommerce} from '../../images/vector_e_commerce.js'
import { vectorMobile } from '../../images/vector_mobile.js'
import { vectorMultiScreen } from '../../images/vector_multi_screen.js'
import { vectorPieces } from '../../images/vector_pieces.js'
import { vectorSecurity } from '../../images/vector_security.js'
import { vectorPlus } from '../../images/vector_plus.js'

export const mainPageBody = () => {
    let whatsapp_link = 'https://api.whatsapp.com/send?phone=5511989213124&text=Ol%C3%A1,%20gostaria'+
                        '%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20'+
                        'da%20UpConnect'
    let links = '<div class="links_and_back">'+
                    '<div class="links">'+
                        '<a href="https://www.instagram.com/upconnectweb">'+
                            '<img src="images/insta.png" alt="instagram" width="33" height="33">' +
                        '</a><br>'+
                        '<a href="https://www.facebook.com">'+
                            '<img src="images/face.png" alt="instagram" width="33" height="33">' +
                        '</a><br>'+
                        '<a href="'+ whatsapp_link +'">'+
                            '<img src="images/whats.png" alt="instagram" width="33" height="33">' +
                        '</a>'+
                    '</div>'+
                    '<div id="link_back" class="back_link">'+
                        '<img src="images/seta_rosa.png" alt="instagram" width="50" height="50">' +
                    '</div>'+
                '</div>'
    let body =  '<div class="main_page_body1 main_page_sector">' +
                    '<div class="first_page_left_container">'+
                        '<div class="main_page_title base_font_color">Transforme sua <br>Presença Digital</div>'+
                        '<div class="main_page_text base_font_color">' +
                            'No mundo atual ter uma presença online robusta e <br>'+
                            'eficiente é crucial para o sucesso de qualquer <br>'+
                            'negócio. Estamos aqui para ajudar sua empresa a <br>'+
                            'se destacar e crescer neste cenário competitivo.' +
                        '</div>' +
                        '<div class="first_page_buttons">'+
                            '<div class="btn_container btn1">'+
                                '<button class="btn btn_pink_full">'+
                                    '<a href="'+ whatsapp_link +'">Fale com um especialista</a>'+
                                '</button>'+
                            '</div>'+
                            '<div class="btn_container btn2">'+
                                '<button id="services2" class = "btn btn_pink_empty">Nossos Serviços</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="first_image_container">'+
                        vectorWorldConnection +
                    '</div>'+
                '</div>'

    let body2 = '<div id="discription" class="main_page_second_sector main_page_sector">' +
                    '<div class="second_sector_title base_pink_font">UpConnect, a sua software house</div>'+
                    '<div class="main_page_text second_sector_text base_font_color">' +
                        'Aqui combinamos expertise técnica com criatividade para oferecer soluções digitais<br>'+
                        'que transformam a maneira como você faz negócios.' +
                    '</div>' +
                    '<div class="cards_container">'+
                        '<div class="second_page_cards second_page_card1">'+
                            '<div class="inside_cards">'+
                                '<div class="title_second_page_card">'+
                                    'Expertise e<br>'+
                                    'Inovação'+
                                '</div>'+
                                '<div class="text_second_page_card">'+
                                    'Utilizamos as tecnologias<br>'+
                                    'mais avançadas e práticas<br>'+
                                    'de design inovadoras para<br>'+
                                    'entregar soluções de alta<br>'+
                                    'qualidade.'+
                                '</div>'+
                                '<div class="link_2nd_page_card">'+
                                    '<a href="'+ whatsapp_link +'">saiba mais</a>'+
                                '</div>'+
                            '</div>'+ 
                        '</div>'+
                        '<div class="second_page_cards second_page_card2">'+
                            '<div class="inside_cards">'+
                                '<div class="title_second_page_card">'+
                                    'Foco Total<br>'+
                                    'no Cliente'+
                                '</div>'+
                                '<div class="text_second_page_card">'+
                                    'Personalizamos nossos<br>'+
                                    'serviços para atender<br>'+
                                    'às suas necessidades<br>'+
                                    'específicas e garantir<br>'+
                                    'sua total satisfação.'+
                                '</div>'+
                                '<div class="link_2nd_page_card">'+
                                    '<a href="'+ whatsapp_link +'">saiba mais</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="second_page_cards second_page_card3">'+
                            '<div class="inside_cards">'+
                                '<div class="title_second_page_card">'+
                                    'Resultado<br>'+
                                    'Comprovados'+
                                '</div>'+
                                '<div class="text_second_page_card">'+
                                    'Nossos projetos são<br>'+
                                    'desenvolvidos para alcançar<br>'+
                                    'resultados mensuráveis,<br>'+
                                    'aumentando a eficiência e o<br>'+
                                    'retorno sobre o investimento'+
                                '</div>'+
                                '<div class="link_2nd_page_card">'+
                                    '<a href="'+ whatsapp_link +'">saiba mais</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'

    let body3 = '<div id="our_services" class="main_page_third_sector main_page_sector">' +
                    '<div class="second_sector_title base_pink_font">Nossos Serviços</div>'+
                    '<div class="third_sector_grids_container">'+
                        '<div class="third_sector_grid third_sector_grid1">'+
                            '<div class="third_sector_grid1_info">'+
                                '<div class="third_sector_grid_title base_font_color">Desenvolvimento<br>'+
                                'de Websites</div>'+
                                '<div class="main_page_text third_sector_grid_text base_font_color">' +
                                    'Criamos websites personalizados, responsivos<br>'+
                                    'e otimizados para SEO, garantindo que seu<br>'+
                                    'negócio se destaque e atraia mais visitantes.'+
                                '</div>' +
                            '</div>'+
                            '<div class="third_sector_grid1_img_container">'+
                                vectorRocketTeam +
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="third_sector_grids_container">'+
                        '<div class="third_sector_grid third_sector_grid2">'+
                            '<div class="third_sector_grid2_info">'+
                                '<div class="third_sector_grid_title base_font_color">Desenvolvimento<br>'+
                                'de E-Commerce</div>'+
                                '<div class="main_page_text third_sector_grid_text base_font_color">' +
                                    'Construímos lojas virtuais seguras e<br>'+
                                    'eficientes, com integração de sistemas de<br>'+
                                    'pagamento, gestão de estoque e funcionalidades<br>'+
                                    'marketing para impulsionar suas vendas.' +
                                '</div>' +
                            '</div>'+
                            '<div class="third_sector_grid2_img_container">'+
                                vectorECommerce +
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="third_sector_grids_container">'+
                        '<div class="third_sector_grid third_sector_grid3">'+
                            '<div class="third_sector_grid1_info">'+
                                '<div class="third_sector_grid_title base_font_color">Desenvolvimento<br>'+
                                'de Aplicativos</div>'+
                                '<div class="main_page_text third_sector_grid_text base_font_color">' +
                                    'Criamos aplicativos móveis inovadores para<br>'+
                                    'Android e iOS, proporcionando experiências<br>'+
                                    'incríveis para seus usuários.' +
                                '</div>' +
                            '</div>'+
                            '<div class="third_sector_grid1_img_container">'+
                                vectorMobile +
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'

    let body4 = '<div class="main_page_fourth_sector main_page_sector">' +
                    '<div class="second_sector_title base_pink_font">+ Serviços</div>'+
                    '<div class="main_page_text second_sector_text base_font_color">' +
                        'Se você é uma pequena ou média empresa, uma startup em crescimento, ou uma grande<br>'+
                        ' corporação buscando transformação digital, estamos aqui para ajudar.' +
                    '</div>' +
                    '<div class="cards_container4">'+
                        '<div class="second_page_cards second_page_card1">'+
                            '<div class="inside_cards">'+
                                '<div class="fourth_sector_img_container">'+
                                    vectorMultiScreen +
                                '</div>'+
                                '<div class="title_fourth_page_card">'+
                                    'Marketing Digital<br>'+
                                    'e Social Media'+
                                '</div>'+
                                '<div class="text_second_page_card">'+
                                    'Ajudamos a sua empresa a<br>'+
                                    'digitalizar processos,<br>'+
                                    'melhorar a eficiência nas<br>'+
                                    'redes e usar tecnologias<br>'+
                                    'avançadas para <b>impulsionar<br>'+
                                    'o seu crescimento</b>.'+
                                '</div>'+
                                '<div class="link_2nd_page_card">'+
                                    '<a href="'+ whatsapp_link +'">saiba mais</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="second_page_cards second_page_card2">'+
                            '<div class="inside_cards">'+
                                '<div class="fourth_sector_img_container">'+
                                    vectorPieces +
                                '</div>'+
                                '<div class="title_fourth_page_card">'+
                                    'Design Gráfico e<br>'+
                                    'Identidade Visual'+
                                '</div>'+
                                '<div class="text_second_page_card">'+
                                    'Desevolvemos logotipos<br>'+
                                    'identitade visual e<br>'+
                                    'materiais gráficos que<br>'+
                                    'refletem a essência da<br>'+
                                    'sua marca e <b>atraem<br>'+
                                    'seu público-alvo</b>.'+
                                '</div>'+
                                '<div class="link_2nd_page_card">'+
                                    '<a href="'+ whatsapp_link +'">saiba mais</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="second_page_cards second_page_card3">'+
                            '<div class="inside_cards">'+
                                '<div class="fourth_sector_img_container">'+
                                    vectorSecurity +
                                '</div>'+
                                '<div class="title_fourth_page_card">'+
                                    'Hospedagem e<br>'+
                                    'Manutenção'+
                                '</div>'+
                                '<div class="text_second_page_card">'+
                                    'Oferecemos serviços de<br>'+
                                    'hospedagem, manutenção e<br>'+
                                    'atualizações periódicas<br>'+
                                    'para garantir que seu<br>'+
                                    'website esteja sempre em<br>'+
                                    '<b>perfeito funcionamento</b>'+
                                '</div>'+
                                '<div class="link_2nd_page_card">'+
                                    '<a href="'+ whatsapp_link +'">saiba mais</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'

    let body5 = '<div class="main_page_fifth_sector main_page_sector">' +
                    '<div class="second_sector_title base_pink_font">FAQ</div>'+
                    '<div class="main_page_text second_sector_text base_font_color">' +
                        'Perguntas mais frequentes' +
                    '</div>' +
                    '<div class="main_page_fifth_sector_faqs">'+
                        '<div class="main_page_text base_font_color faq_question faq_question_row1">' +
                            'Pergunta 1?' +
                            '<div class="plus_x">'+
                                vectorPlus +
                            '</div>'+
                            '<div class="main_page_text base_font_color faq_answer">' +
                                'Resposta 1<br>' +
                                'Resposta 1<br>' +
                                'Resposta 1<br>' +
                            '</div>'+
                        '</div>' +
                        '<div class="main_page_text base_font_color faq_question faq_question_row2">' +
                            'Pergunta 2?' +
                            '<div class="plus_x">'+
                                vectorPlus +
                            '</div>'+
                            '<div class="main_page_text base_font_color faq_answer">' +
                                'Resposta 2<br>' +
                                'Resposta 2<br>' +
                                'Resposta 2<br>' +
                            '</div>'+
                        '</div>' +
                    '</div>'+
                '</div>'

    let body6 = '<div id="budget" class="main_page_sixth_sector main_page_sector">' +
                    '<div class="second_sector_title base_pink_font">Faça agora seu orçamento</div>'+
                    '<div class="main_page_text second_sector_text base_font_color">' +
                        'Solicite seu orçamento ou entre em contato conosco hoje mesmo para agendar uma<br>' +
                        'conversa e descobrir como podemos transformar o futuro digital do sue negócio'+
                    '</div>' +
                    '<div class="main_page_sixth_sector_buttons">' +
                        '<div class="btn_container sixth_sector_btn1">'+
                            '<button class = "btn btn_pink_full">Gere um orçamento online</button>'+
                        '</div>' +
                        '<div class="btn_container sixth_sector_btn2">'+
                            '<button class = "btn btn_pink_empty">'+
                                '<a href="'+ whatsapp_link +'">Fale com um especialista</a>'+
                            '</button>'+
                        '</div>' +
                    '</div>' +
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

    return links + body + body2 + body3 + body4 + body5 + body6 + footer
}
