import { vectorPlus } from '../../images/vector_plus.js'
import { vectorBackButton } from '../../images/vector_back_button.js'
import { vectorMagnifyingGlass } from '../../images/vectorMagnifyingGlass.js'

export const faqPageBody = () => {
    const row_class = 'faq_question_row'

    const changeAllChildSvgFill = (color) => {
        let pulses = document.getElementsByClassName('plus_x')
        if (pulses) for (let i = 0; i < pulses.length; i++) {
            pulses[i].childNodes[0].childNodes[0].attributes.fill.value = color
        }
    }
    
    const darkLightFunc = (mode) => {
        if(mode == 'light') {
            changeAllChildSvgFill("#263238")
        } else {
            changeAllChildSvgFill("white")
        }
    }

    const initPage = () => {
        let page_back_btn = document.getElementById('page_back')
        page_back_btn && page_back_btn.addEventListener('click', () => {
            localStorage.setItem('page', '')
            location.reload()
            window.scrollTo(0, 0);
        })

        const faqs = document.getElementsByClassName('faq_question')
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

        const eliminate_useless_words = (words) => {
            const useless_words = ['para', 'um', 'a', 'as', 'e', 'o', 'os', 'na', 'de', 'do', 'é', '']
            return words.filter(word => !useless_words.includes(word))
        }

        const reorder_elements = (faqs_order, faqs) => {
            let max = Math.max(...faqs_order)
            let faqs_parent = faqs[0].parentNode
            let faq_elements = []
            for (let n = max; n >= 0; n--) {
                for (let f = 0; f < faqs_order.length; f++){
                    if(faqs_order[f] == n) {
                        faq_elements.push(f)
                    }
                }
            }
            
            for (let e = 0; e < faq_elements.length; e++) {
                let classList = faqs[faq_elements[e]].classList
                classList.remove(classList[classList.length - 1])
                classList.add(row_class + (e + 1))
            }
        }

        const reorder_faqs_by_search = (search_input) => {
            let search_words = search_input.value.split(' ')
            search_words = eliminate_useless_words(search_words)
            let faqs_order = []
            for (let i = 0; i < faqs.length; i++) {
                let faq_words = faqs[i].innerText.split(' ')
                faq_words = eliminate_useless_words(faq_words)
                faqs_order[i] = 0
                for (let s = 0; s < search_words.length; s++){
                    for (let f = 0; f < faq_words.length; f++){
                        if (faq_words[f].toLowerCase().includes(search_words[s].toLowerCase())) {
                            faqs_order[i]++
                        }
                    }
                }
            }
            reorder_elements(faqs_order, faqs)
        }

        const search_input = document.getElementById('search_input')
        search_input && faqs && search_input.addEventListener("keyup", () => {
            reorder_faqs_by_search(search_input)
        });
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
    
    let body1 = '<div class="main_page_faq main_page_sector_faq">' +
        '<div class="second_sector_title base_pink_font">FAQ - Dúvidas Frequentes</div>'+
        '<div class="main_page_text second_sector_text base_font_color">' +
            'Navegue pelas perguntas frequentes para melhorar sua compreensão' +
        '</div>' +
        '<div class="search_box">' +
            '<input id="search_input" class="search_input"></input>' +
            vectorMagnifyingGlass +
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
            '<div class="main_page_text base_font_color faq_question faq_question_row7">' +
                '7. Posso atualizar o conteúdo do site por conta própria?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Sim! Desenvolvemos nossos sites com áreas administrativas customizadas para ' +
                    'que você possa gerenciar o conteúdo de forma simples e intuitiva, sem ' +
                    'precisar de conhecimentos técnicos.'+
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row8">' +
                '8. Vocês oferecem otimização para SEO (Search Engine Optimization)?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Sim, todos os sites que desenvolvemos vêm com configurações básicas de SEO. ' +
                    'Também oferecemos serviços de otimização avançada para ajudar seu site a ' +
                    'ter um melhor posicionamento nos mecanismos de busca.'+
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row9">' +
                '9. Vocês oferecem hospedagem e registro de domínio?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Sim, podemos ajudar na configuração de hospedagem e no registro de domínio, ' +
                    'mas também trabalhamos com parceiros de confiança. Caso você já tenha um ' +
                    'serviço de hospedagem, podemos integrá-lo ao projeto.'+
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row10">' +
                '10. Quais são as etapas de um projeto de criação de site?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'O processo geralmente segue estas etapas: <br><br>' +
                    '<li>Briefing – Reunião para entender as necessidades e objetivos do cliente.</li>' +
                    '<li>Planejamento – Definição do escopo do projeto e wireframes (esqueleto do site).</li>'+
                    '<li>Design – Criação do layout visual e identidade do site.</li>'+
                    '<li>Desenvolvimento – Codificação e desenvolvimento das funcionalidades com tecnologias modernas.</li>'+
                    '<li>Revisão e Testes – Ajustes finais e testes de performance e responsividade.</li>'+
                    '<li>Lançamento – Publicação do site e entrega oficial ao cliente.</li>' +
                    '<li>Suporte e Manutenção – Suporte contínuo, se necessário.</li>' +
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row11">' +
                '11. O que acontece se eu precisar de alterações após o lançamento?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Após o lançamento, oferecemos um período de ajustes e revisões para correções ' +
                    'simples. Para alterações maiores, oferecemos pacotes de manutenção para ' +
                    'atender às suas novas necessidades.'+
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row12">' +
                '12. Vocês oferecem criação de conteúdo para o site?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Sim, também oferecemos serviços de redação de conteúdo, design de imagens ' +
                    'e otimização de conteúdo para SEO, para que o site seja informativo e ' +
                    'atraente para os visitantes.'+
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row13">' +
                '13. Vocês fazem integração com redes sociais e ferramentas de marketing?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Sim, podemos integrar o site com suas redes sociais, Google Analytics, ' +
                    'ferramentas de e-mail marketing e chatbots, garantindo uma presença ' +
                    'digital completa.'+
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row14">' +
                '14. Qual é o processo de pagamento?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Geralmente, trabalhamos com um cronograma de pagamento em três partes: ' +
                    '30% na aprovação do projeto, 40% no desenvolvimento, e 30% na entrega ' +
                    'final. No entanto, podemos adaptar conforme a necessidade do cliente.'+
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row15">' +
                '15. Vocês desenvolvem lojas virtuais?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Sim, criamos e-commerces personalizados com integração de meios de ' +
                    'pagamento, carrinho de compras e controle de estoque, utilizando ' +
                    'desenvolvimento personalizado para atender a requisitos específicos.'+
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row16">' +
                '16. Como posso acompanhar o andamento do meu projeto?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Durante o projeto, mantemos você atualizado através de relatórios e ' +
                    'reuniões de progresso, além de um ambiente de testes onde você pode ' +
                    'visualizar o desenvolvimento em tempo real.'+
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row17">' +
                '17. Qual é a diferença entre um site institucional e um e-commerce?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Um site institucional é focado em apresentar informações sobre a empresa, ' +
                    'serviços e contato. Já o e-commerce permite a venda de produtos ou serviços ' +
                    'online, com funcionalidades específicas como carrinho de compras e '+
                    'integração de meios de pagamento.' +
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row18">' +
                '18. Vocês oferecem treinamento para gerenciar o site?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Sim, após a entrega, oferecemos um treinamento básico para que .' +
                    'você ou sua equipe possam gerenciar e atualizar o site com facilidade.' +
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row19">' +
                '19. O que é um site com CMS (Sistema de Gerenciamento de Conteúdo)?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Nossos sistemas de gerenciamento de conteúdo (CMS) são desenvolvidos do ' +
                    'zero, proporcionando uma experiência intuitiva e customizável. Isso ' +
                    'permite que você edite o conteúdo do site sem precisar de conhecimentos '+
                    'técnicos de programação.' +
                '</div>'+
            '</div>' +
            '<div class=" main_page_text base_font_color faq_question faq_question_row20">' +
                '20. Meu site precisa de políticas de privacidade e termos de uso?' +
                '<div class="plus_x">'+
                    vectorPlus +
                '</div>'+
                '<div class="main_page_text base_font_color faq_answer">' +
                    'Sim, é essencial ter esses documentos para estar em conformidade com a ' +
                    'LGPD (Lei Geral de Proteção de Dados) e proteger os direitos dos usuários. ' +
                    'Podemos ajudar na implementação dessas políticas.'+
                '</div>'+
            '</div>' +
        '</div>'+
    '</div>'

    let body2 = '<div id="budget" class="main_page_sixth_sector main_page_sector">' +
                    '<div class="third_sector_grid_title base_font_color">Faça agora seu orçamento</div>'+
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

    const body = back_btn + body1 + body2 + footer

    return { body: body, darkLightFuncBody: darkLightFunc, bodyInitFunction: initPage }
}