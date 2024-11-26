import { vectorWorldConnection } from '../../images/vector_world_connection.js'
import { vectorWorldConnectionLight } from '../../images/vector_world_connection_light.js'
import { vectorRocketTeam } from '../../images/vector_rocket_team.js'
import { vectorRocketTeamLight } from '../../images/vector_rocket_team_light.js'
import { vectorECommerce} from '../../images/vector_e_commerce.js'
import { vectorECommerceLight } from '../../images/vector_e_commerce_light.js'
import { vectorMobile } from '../../images/vector_mobile.js'
import { vectorMultiScreen } from '../../images/vector_multi_screen.js'
import { vectorMultiScreenLight } from '../../images/vector_multi_screen_light.js'
import { vectorPieces } from '../../images/vector_pieces.js'
import { vectorPiecesLight } from '../../images/vector_pieces_light.js'
import { vectorSecurity } from '../../images/vector_security.js'
import { vectorSecurityLight } from '../../images/vector_security_light.js'
import { vectorPlus } from '../../images/vector_plus.js'
import { vectorUpConnectBig } from '../../images/vector_upconnect_big.js'

export const mainPageBody = () => {
    const darkLightFunc = (mode) => {
        const first_image_container = document.getElementById("first_image_container")
        const third_sector_grid1_img_container = document.getElementById("third_sector_grid1_img_container")
        const third_sector_grid2_img_container = document.getElementById("third_sector_grid2_img_container")
        const fourth_sector_img_container1 = document.getElementById("fourth_sector_img_container1")
        const fourth_sector_img_container2 = document.getElementById("fourth_sector_img_container2")
        const fourth_sector_img_container3 = document.getElementById("fourth_sector_img_container3")
        const changeAllChildSvgFill = (color) => {
            const pulses = document.getElementsByClassName('plus_x')
            if (pulses) for (let i = 0; i < pulses.length; i++) {
                pulses[i].childNodes[0].childNodes[0].attributes.fill.value = color
            }
        }

        if(mode == 'light') {
            first_image_container.innerHTML = vectorWorldConnectionLight
            third_sector_grid1_img_container.innerHTML = vectorRocketTeamLight
            third_sector_grid2_img_container.innerHTML = vectorECommerceLight
            fourth_sector_img_container1.innerHTML = vectorMultiScreenLight
            fourth_sector_img_container2.innerHTML = vectorPiecesLight
            fourth_sector_img_container3.innerHTML = vectorSecurityLight
            changeAllChildSvgFill("#263238")
        } else {
            first_image_container.innerHTML = vectorWorldConnection
            third_sector_grid1_img_container.innerHTML = vectorRocketTeam
            third_sector_grid2_img_container.innerHTML = vectorECommerce
            fourth_sector_img_container1.innerHTML = vectorMultiScreen
            fourth_sector_img_container2.innerHTML = vectorPieces
            fourth_sector_img_container3.innerHTML = vectorSecurity
            changeAllChildSvgFill("white")
        }
    }

    const initPage = () => {
        const main_title = document.getElementsByClassName("main_page_title")[0]
        const faqs = document.getElementsByClassName('faq_question')
        const more_faqs_link = document.getElementById('more_faqs_link')
        const typing_div = '<div class="main_page_title typing_tick">|</div>'
        const online_budget_link = document.getElementById('online_budget_link')

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
            localStorage.setItem('page', 'faq')
            location.reload()
            window.scrollTo(0, 0);
        })

        online_budget_link && online_budget_link.addEventListener('click', () => {
            localStorage.setItem('page', 'budget')
            location.reload()
            window.scrollTo(0, 0);
        })
    }

    let whatsapp_link = 'https://api.whatsapp.com/send?phone=5511989213124&text=Ol%C3%A1,%20gostaria'+
                        '%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20'+
                        'da%20UpConnect'
                        
    let upconnect_big_name =   '<div class="upconnect_big_name">'+
                                    vectorUpConnectBig +
                                '</div>'

    let links = '<div class="links_and_back">'+
                    '<div class="links">'+
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

    let body =  '<div class="main_page_body1 main_page_sector">' +
                    '<div class="first_page_left_container">'+
                        '<div id="main_page_title" class="main_page_title"'+
                            'value="Transforme sua <br>Presença Digital">'+
                        '</div>'+
                        '<div class="main_page_text base_font_color">' +
                            'No mundo atual ter uma presença online robusta<br>'+
                            'e eficiente é crucial para o sucesso de qualquer negócio.<br>'+
                            'Estamos aqui para ajudar sua empresa a se <b>destacar</b> e crescer neste<br>'+
                            'cenário competitivo.' +
                        '</div>' +
                        '<div class="first_page_buttons">'+
                            '<div class="btn_container btn1">'+
                                '<button class="btn btn_pink_full">'+
                                    '<a href="'+ whatsapp_link +'" target="_blank">Fale com um especialista</a>'+
                                '</button>'+
                            '</div>'+
                            '<div class="btn_container btn2">'+
                                '<button id="services2" class = "btn btn_pink_empty">Nossos Serviços</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div id="first_image_container" class="first_image_container">'+
                    '</div>'+
                '</div>'

    let body2 = '<div id="discription" class="main_page_second_sector main_page_sector">' +
                    '<div class="second_sector_title base_pink_font">UpConnect, a sua software house</div>'+
                    '<div class="main_page_text second_sector_text base_font_color">' +
                        'Aqui combinamos expertise técnica com criatividade para oferecer soluções digitais '+
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
                                    '<a href="'+ whatsapp_link +'" target="_blank">saiba mais</a>'+
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
                                    '<a href="'+ whatsapp_link +'" target="_blank">saiba mais</a>'+
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
                                    '<a href="'+ whatsapp_link +'" target="_blank">saiba mais</a>'+
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
                                '<div class="third_sector_grid_title">Desenvolvimento<br>'+
                                'de Websites</div>'+
                                '<div class="main_page_text third_sector_grid_text base_font_color">' +
                                    'Criamos websites personalizados, responsivos<br>'+
                                    'e otimizados para SEO, garantindo que seu<br>'+
                                    'negócio se destaque e atraia mais visitantes.'+
                                '</div>' +
                            '</div>'+
                            '<div id = "third_sector_grid1_img_container" class="third_sector_grid1_img_container">'+
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
                            '<div id="third_sector_grid2_img_container" class="third_sector_grid2_img_container">'+
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
                                '<div id="fourth_sector_img_container1" class="fourth_sector_img_container">'+
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
                                    '<a href="'+ whatsapp_link +'" target="_blank">saiba mais</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="second_page_cards second_page_card2">'+
                            '<div class="inside_cards">'+
                                '<div id="fourth_sector_img_container2" class="fourth_sector_img_container">'+
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
                                    '<a href="'+ whatsapp_link +'" target="_blank">saiba mais</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="second_page_cards second_page_card3">'+
                            '<div class="inside_cards">'+
                                '<div id="fourth_sector_img_container3" class="fourth_sector_img_container">'+
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
                                    '<a href="'+ whatsapp_link +'" target="_blank">saiba mais</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'

    let body5 = '<div class="main_page_fifth_sector main_page_sector">' +
                    '<div class="second_sector_title base_pink_font">FAQ - Dúvidas Frequentes</div>'+
                    '<div class="main_page_text second_sector_text base_font_color">' +
                        'Perguntas mais frequentes' +
                    '</div>' +
                    '<div class="main_page_fifth_sector_faqs">'+
                        '<div class="main_page_text base_font_color faq_question faq_question_row1">' +
                            '1. Quanto tempo leva para criar um site?' +
                            '<div class="plus_x">'+
                                vectorPlus +
                            '</div>'+
                            '<div class="main_page_text base_font_color faq_answer">' +
                                'O prazo varia de acordo com a complexidade e o número de páginas do site. Para sites ' +
                                'simples, o tempo médio é de 2 a 4 semanas. Projetos mais complexos, como e-commerces ' +
                                'ou sites com funcionalidades específicas, podem levar de 6 a 8 semanas.' +
                            '</div>'+
                        '</div>' +
                        '<div class="main_page_text base_font_color faq_question faq_question_row2">' +
                            '2. Quais informações preciso fornecer para começar?' +
                            '<div class="plus_x">'+
                                vectorPlus +
                            '</div>'+
                            '<div class="main_page_text base_font_color faq_answer">' +
                                'Inicialmente, precisamos entender o objetivo do site e o público-alvo. Além >' +
                                'disso, qualquer conteúdo relevante, como textos, imagens, logotipo, identidade ' +
                                'visual e referências de design, será útil para personalizar o projeto.' +
                            '</div>'+
                        '</div>' +
                        '<div class="main_page_text base_font_color faq_question faq_question_row3">' +
                            '3. Vocês oferecem suporte e manutenção após o site ser lançado?' +
                            '<div class="plus_x">'+
                                vectorPlus +
                            '</div>'+
                            '<div class="main_page_text base_font_color faq_answer">' +
                                'Sim! Oferecemos planos de suporte e manutenção para garantir que seu site ' +
                                'esteja sempre atualizado e seguro, além de ajustes e atualizações conforme necessário.' +
                            '</div>'+
                        '</div>' +
                        '<div class="main_page_text base_font_color faq_question faq_question_row4">' +
                            '4. Quais são os custos envolvidos na criação de um site?' +
                            '<div class="plus_x">'+
                                vectorPlus +
                            '</div>'+
                            '<div class="main_page_text base_font_color faq_answer">' +
                                'O valor depende do escopo do projeto e das funcionalidades desejadas. ' +
                                'Normalmente, consideramos a quantidade de páginas, design personalizado, .' +
                                'integração com ferramentas externas, e-commerce e outros fatores. '+
                                'Entre em contato para um orçamento detalhado'+
                            '</div>'+
                        '</div>' +
                        '<div class="main_page_text base_font_color faq_question faq_question_row5">' +
                            '5. Vocês trabalham com plataformas específicas como WordPress ou Shopify?' +
                            '<div class="plus_x">'+
                                vectorPlus +
                            '</div>'+
                            '<div class="main_page_text base_font_color faq_answer">' +
                                'Não, desenvolvemos todos os sites de forma personalizada e do zero.' +
                                'Todo o desenvolvimento é realizado pelo nosso time de TI, garantindo ' +
                                'maior flexibilidade e personalização para atender exatamente às '+
                                'suas necessidades.'+
                            '</div>'+
                        '</div>' +
                        '<div class="main_page_text base_font_color faq_question faq_question_row6">' +
                            '6. O site será responsivo?' +
                            '<div class="plus_x">'+
                                vectorPlus +
                            '</div>'+
                            '<div class="main_page_text base_font_color faq_answer">' +
                                'Sim, todos os nossos projetos são desenvolvidos para serem responsivos e ' +
                                'se adaptarem a dispositivos móveis (smartphones e tablets), garantindo ' +
                                'uma experiência de navegação consistente.'+
                            '</div>'+
                        '</div>' +
                        '<div class="more_faqs_question main_page_text faq_question_row7">' +
                            'Ainda não esclareceu sua dúvida? '+
                            '<div id="more_faqs_link" class="base_pink_font">'+
                                'CLIQUE AQUI!'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'

    let body6 = '<div id="budget" class="main_page_sixth_sector main_page_sector">' +
                    '<div class="third_sector_grid_title base_font_color">Faça agora seu orçamento</div>'+
                    '<div class="main_page_text second_sector_text base_font_color">' +
                        'Solicite seu orçamento ou entre em contato conosco hoje mesmo para agendar uma<br>' +
                        'conversa e descobrir como podemos transformar o futuro digital do sue negócio'+
                    '</div>' +
                    '<div class="main_page_sixth_sector_buttons">' +
                        '<div class="btn_container sixth_sector_btn1">'+
                            '<button id="online_budget_link" class="btn btn_pink_full">Gere um orçamento online</button>'+
                        '</div>' +
                        '<div class="btn_container sixth_sector_btn2">'+
                            '<button class = "btn btn_pink_empty">'+
                                '<a href="'+ whatsapp_link +'" target="_blank">Fale com um especialista</a>'+
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

    let page =  upconnect_big_name + links + body + body2 + body3 + body4 +
            body5 + body6 + upconnect_big_name + footer
    return { body: page, darkLightFuncBody: darkLightFunc, bodyInitFunction: initPage }
}
