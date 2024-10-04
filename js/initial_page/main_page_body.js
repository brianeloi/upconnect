import { vectorWorldConnection } from '../../images/vector_world_connection.js'
import { vectorRocketTeam } from '../../images/vector_rocket_team.js'
import { vectorECommerce} from '../../images/vector_e_commerce.js'
import { vectorMobile } from '../../images/vector_mobile.js'
import { vectorMultiScreen } from '../../images/vector_multi_screen.js'
import { vectorPieces } from '../../images/vector_pieces.js'
import { vectorSecurity } from '../../images/vector_security.js'
import { vectorPlus } from '../../images/vector_plus.js'
import { vectorUpConnectBig } from '../../images/vector_upconnect_big.js'

export const mainPageBody = () => {
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
                    '<div id="link_back" class="back_link">'+
                        '<img src="images/seta_rosa.png" alt="instagram" width="50" height="50">' +
                    '</div>'+
                '</div>'
    let body =  '<div class="main_page_body1 main_page_sector">' +
                    '<div class="first_page_left_container">'+
                        '<div id="main_page_title" class="main_page_title base_font_color"'+
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
                    '<div class="first_image_container">'+
                        vectorWorldConnection +
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
                                '<div class="third_sector_grid_title base_font_color">Desenvolvimento de<br>'+
                                'Aplicativos Mobile</div>'+
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
                                    '<a href="'+ whatsapp_link +'" target="_blank">saiba mais</a>'+
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
                                    '<a href="'+ whatsapp_link +'" target="_blank">saiba mais</a>'+
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
                                    '<a href="'+ whatsapp_link +'" target="_blank">saiba mais</a>'+
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
                            '1. Quais informações preciso fornecer para começar?' +
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
                            '<div id="more_faqs_link" class="base_pink_font">CLIQUE AQUI!</div>'+
                        '</div>'+
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row8">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row9">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row10">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row11">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row12">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row13">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row14">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row15">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row16">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row17">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row18">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row19">' +
                            '18. Vocês oferecem treinamento para gerenciar o site?' +
                            '<div class="plus_x">'+
                                vectorPlus +
                            '</div>'+
                            '<div class="main_page_text base_font_color faq_answer">' +
                                'Sim, após a entrega, oferecemos um treinamento básico para que .' +
                                'você ou sua equipe possam gerenciar e atualizar o site com facilidade.' +
                            '</div>'+
                        '</div>' +
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row20">' +
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
                        '<div class="more_faqs main_page_text base_font_color faq_question faq_question_row21">' +
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

    let body6 = '<div id="budget" class="main_page_sixth_sector main_page_sector">' +
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

    return  upconnect_big_name + links + body + body2 + body3 + body4 +
            body5 + body6 + upconnect_big_name + footer
}
