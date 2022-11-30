const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

const microphone = document.getElementById('user-voice')
const userTextSubmit = document.getElementById('user-text-submit')
let messageContainer = document.querySelector('.show-messages')


function activatedSpeakMode() {
    microphone.style.background = '#0B8C68';
    recognition.start();
    console.log("Activated");
}

function sendUserText() {
    let message = document.getElementById('user-text').value
    executeChatbot(message)
}

function identifyMessage(message) {
    let mainSubject = [
        saudacao = [
            "Olá, meu nome é ForBot!",
            "Oi, eu sou um robo chamado ForBot.",

            saudacao2 = [
                "Olá, eu estou ótimo!",
                "Estou muito bem."
            ],

            bomdia = [
                "Bom dia! Desejo um dia incrível a você"
            ],
            boatarde = [
                "Boa tarde! Espero que esteja tendo um ótimo dia"
            ],
            boanoite = [
                "Boa noite! Espero que seu dia tenha sido ótimo"
            ],
        ],
        ajuda = [
            "Eu posso lhe oferecer informações sobre: <p> Postura; </p> Atividade Física; <p> Alimentação; </p> Saúde do Sono; <p> Saúde Mental; <p> Saúde Sexual; </p> Posso também apresentar mais informações sobre mim (ForBot), como: <p> Quem são meus desenvolvedores; </p> Qual é o objetivo do nosso projeto; <p> Qual escola eu fui criado. </p>", // Informações 0
            "Certo, eu posso lhe oferecer informações sobre: <p> Postura; </p> Atividade Física; <p> Alimentação; </p> Saúde do Sono; <p> Saúde Mental; </p> Posso também apresentar mais informações sobre mim (ForBot), como: <p> Quem são meus desenvolvedores; </p> Qual é o objetivo do nosso projeto; <p> Qual escola eu fui criado. </p>",  // Informações 1
            "Sinta-se a vontade para perguntar sobre qualquer um desses assuntos!" // Texto 2
        ],
        dev = [
            "Meus principais desenvolvedores são: Ariel Aio, João Monção, Arthur Risso e Davi Ribeiro, porém várias pessoas fazem parte desse belo projeto, tais como: Amanda, Jhenifer, Mariana, Gabriel Agueira, Higor e Cínthia" // Desenvolvedores 0
        ],
        objetivo = [
            "Nosso principal objetivo é melhorar a qualidade de vida e bem-estar de todas as pessoas, visando construir a possibilidade de um futuro melhor através de hábitos saudáveis" // Objetivo do projeto 0
        ],
        escola = [
            "Eu fui desenvolvido na instituição ETEC Prof. Armando José Farinazzo, localizada em Fernandópolis-SP." // Escola que foi desenvolvido 0
        ],
    ]

    let nicheSubject = [
        postura = [
            "Posso lhe dar informações sobre: <p> O que é uma má postura; </p> Como ter uma postura correta; <p> Dicas posturais para o dia a dia. </p>", // Texto índice | 0
            "A má postura é um problema que ocorre muito nos dias atuais, principalmente por conta do sedentarismo ou até pela falta de hábito postural. Se baseia na pessoa que deixa de se beneficiar com uma boa postura, trazendo malefícios para si, como a aparência de dores musculares e torcicolos pelo corpo todo.", // Postura ruim | 1 
            "A postura correta é a posição em que você mantem seu corpo e coluna vertebral de forma ereta contra a gravidade, respeitando as curvas fisiológicas. Essa correção postural deve ser executada ao manter-se de pé, assim como sentado(a) ou deitado(a). <p> Apesar de ser essencial, nem sempre é algo fácil corrigir a postura ou mantê-la, pois envolve um treinamento e uma educação corporal, para então, a musculatura poder se permitir suportar a tensão sobre as articulações e as outras partes do corpo. </p> Dessa forma, é perceptível que tem-se diversos benefícios direcionados a pessoa que possui uma postura correta, a lista a seguir mostra alguns destes: <p> - Mantém os ossos e articulações no alinhamento correto para que os músculos sejam usados corretamente; </p> - Ajuda a diminuir o impacto nas superfícies articulares, que podem resultar em artrite/artrose; <p> - Diminui o stress sobre os ligamentos que prendem as articulações da coluna entre si (sobrecarga/edema ligamentar); </p> - Evita que a coluna fique rígida em posições anormais; <p> - Previne o cansaço; </p> - Evite problema de tensão muscular e sobrecarga; <p> - Previne dores nas costas e dor muscular (mialgias); </p> - Contribui para uma boa aparência.", // Postura correta | 2
            "Sente-se com as costas retas e os ombros para trás. Os glúteos devem tocar a parte traseira da sua cadeira; <p> - Lembre-se de distribuir o peso do corpo uniformemente em ambos os quadris; </p> - Quando estiver dirigindo, se não estiver bem adaptado ao banco do automóvel, use um apoio na curvatura lombar. Os joelhos devem estar no mesmo nível ou mais alto do que seus quadris. <p> - Em casos onde é preciso levantar objetos, mantenha os pés firmes e estáveis no chão, costas retas e dobras nos joelhos e quadris; </p> - Caso esteja de pé, mantenha um pé à frente do outro, com os joelhos ligeiramente flexionados, isso tira a pressão da sua lombar; <p> - Pare de fumar, os fumantes estão mais propensos a terem dor nas costas, pois a nicotina restringe o fluxo de sangue para os discos, que amortecem as vértebras.", // Dicas de postura | 3
        ],
        atividadefisica = ["Posso lhe oferecer informações sobre: <p> Dicas para começar a praticar exercícios físicos; </p> Benefícios da pratica de exercícios físicos; <p> Duração para pratica de exercícios físicos. </p>", // Texto índice 0
            "Encontre um local adequado para praticar as atividades físicas, comece com uma atividade que não exige alto preparo físico; Procure atividades realizadas por várias pessoas, inclusive do seu círculo de amizade, o que poderá ser um estímulo a mais.", // Dicas atividade física 1
            "A atividade física previne o desenvolvimento de doenças crônicas, como hipertensão e diabetes. As atividades físicas controlam os níveis de colesterol. A atividade física pode ser uma importante aliada no tratamento da depressão e ansiedade."], // Benefícios da atividade física 2
        alimentacao = ["Posso lhe oferecer informações sobre: O que é saúde alimentar; <p> Benefícios da saúde alimentar. </p>", // Texto índice 0
            "Saúde alimentar trata-se do conjunto de hábitos que formam as escolhas alimentares em que cada pessoa faz no seu dia a dia, seja no café da manhã, almoço ou jantar.", // O que é saúde alimentar 1
            "Ter uma alimentação saudável reduz diversos riscos à vida, como exemplos estão os ataques cardíacos, diabetes, pressão alta, problemas neurológicos e outras doenças." // Benefícios da saúde alimentar 2
        ],
        sono = [
            "Posso lhe oferecer nformações sobre: Quando surgiu a Medicina do Sono; Objetivo dos profissionais; Doenças relacionadas ao sono.", // Texto índice 0
            "Na década de 70 surgiu a Medicina do Sono, por interesse de ser aprofundado os conhecimentos de como era o sono e como era seu processo, surgindo assim as primeiras universidades da Medicina do Sono no Estados Unidos e na Europa.", //Quando surgiu 1
            "Os profissionais têm como objetivo estudar as funções do sono, com isso podem ser evitados distúrbios que não são muitos conhecidos, trazendo graves consequências pela falta de tratamento.", //Objetivo dos profissionais 2
            "Algumas doenças que podem ser citados que atualmente está sendo procurado tratamento é: insônia (crônica ou de curto prazo), hipersonias, distúrbios do ritmo circadiano, distúrbios dos trabalhadores de turno, jet lag, sonambulismo, sono rem e não rem e o distúrbios respiratórios do sono." //Doenças relacionadas 3
        ],
        sexo = [
            "Posso lhe oferecer informações sobre: Como tratar a saúde sexual; Quais os benefícios da saúde sexual.", // Texto índice 0
            "O mais recomendado pelos médicos é o uso da camisinha, que além de prevenir a maior parte das doenças evita uma gravidez indesejada e outros métodos contraceptivos.", // Como tratar a saúde sexual 1
            "Produz bem estar, disposição para demais atividades de lazer ou profissionais, melhores condições de saúde, além da prevenção de doenças mentais como a depressão e uma felicidade espiritual de certa forma, principalmente quando é com alguém que você possui um sentimento afetivo." // Benefícios da saúde sexual 2
        ],
        mental = [
            "Posso lhe oferecer informações sobre: O que é saúde mental; Doenças mentais; Serviços de ajuda.", // Texto índice 0
            "Saúde mental refere-se a um bem estar no qual o indivíduo desenvolve suas habilidades pessoais, consegue lidar com os estresses da vida, trabalha de forma produtiva e encontra-se apto a dar sua contribuição para sua comunidade.", // O que é saúde mental 1
            "Atualmente, as doenças mentais estão cada vez mais comuns, como a depressão. Fazendo com que manter o equilíbrio mental seja uma dificuldade para todos, para ocorrer uma diminuição de casos e uma melhora a saúde mental da população é necessário uma rede de apoio, podendo ser familiares, órgão público da saúde.", // Doenças mentais 2
            "Já há serviços de ajuda atualmente, como o serviço de apoio Centro de Valorização a Vida (CVV), aonde quem estiver precisando de ajuda pode ligar para eles, pelo número 188, aonde terá pessoas qualificadas para ajudar." // Serviço de ajuda 3
        ]
    ]

    
    function redirectToCorrectMessage(msg) {
        let userMessage = msg.trim().replace(" ", "").toUpperCase()
        console.log(userMessage)

        const speech = new SpeechSynthesisUtterance()
        speech.text = "Desculpa, não entendi o que você disse."

        let finalresult = null

        // SAUDAÇÃO
        if (['OLÁ', 'OLA', 'OI', 'OII', 'OIE', 'OLAA', 'EAI', 'SALVE', 'OPAE AÍ', 'EAÍ'].includes(userMessage)) {
            finalresult = mainSubject[0][Math.floor(Math.random() * 2)]
            speech.text = finalresult // CUMPRIMENTO (OI, OLÁ)
        }
        if (['COMOVAI', 'TUDOBEM', 'OLÁTUDO BEM', 'OITUDO BEM', 'OLÁCOMO VAI', 'EAÍ COMO VAI', 'OPABOM', 'OPATUDO BEM', 'EAÍ COMO VAI', 'EAÍ TUDO BEM'].includes(userMessage)) {
            finalresult = mainSubject[0][2][Math.floor(Math.random() * 2)]
            speech.text = finalresult // TUDO BEM
        }
        if (['BOMDIA', 'OLÁBOM DIA', 'OIBOM DIA', 'EAÍ BOM DIA', 'OPABOM DIA'].includes(userMessage)) {
            finalresult = mainSubject[0][3][0]
            speech.text = finalresult // BOM DIA
        }
        if (['BOATARDE', 'OLÁBOA TARDE', 'OIBOA TARDE', 'EAÍ BOA TARDE', 'OPABOA TARDE'].includes(userMessage)) {
            finalresult = mainSubject[0][4][0]
            speech.text = finalresult // BOA TARDE
        }
        if (['BOANOITE', 'OLÁBOA NOITE', 'OIBOA NOITE', 'EAÍ BOA NOITE', 'OPABOA NOITE'].includes(userMessage)) {
            finalresult = mainSubject[0][5][0]
            speech.text = finalresult // BOA NOITE
        }


        if (['AJUDA', 'AJUDE', 'AJUDAR', 'AJUDA?', 'AJUDAME', 'AJUDA-ME', 'MEAJUDA', 'PRECISODEAJUDA', 'HELP', 'AJUDAR', 'AJUDAR?', 'AJUDARIA', 'AJUDARA', 'AJUDARÁ', 'AJUDEME', 'AJUDE-ME', 'MEAJUDE', 'PODEME AJUDAR', 'VOCEPODE ME AJUDAR', 'VOCÊPODE ME AJUDAR', 'OICOMO VOCÊ PODE ME AJUDAR', 'OLÁCOMO VOCÊ PODE ME AJUDAR', 'EMQUE VOCÊ PODE ME AJUDAR', 'PRECISODE AJUDA', 'EMQUE VOCÊ PODE SER ÚTIL', 'COMOVOCÊ PODE SER ÚTIL', 'INEED HELP', 'PLEASEHELP ME', 'PORFAVOR ME AJUDE', 'PORGENTILEZA VOCÊ PODE ME AJUDAR', 'PORFAVOR VOCÊ PODE ME AJUDAR'].includes(userMessage)) {
            finalresult = mainSubject[1][0]
            speech.text = finalresult // AJUDA
        }

        if (['DESENVOLVEDORES', 'PROGRAMADORES', 'DEVS', 'PROGRAMADOR', 'DESENVOLVEDOR', 'DEV', 'PROGRAMAÇÃO', 'PROGRAMAÇAO', 'PROGRAMACAO', 'QUEMSÃO OS SEUS DESENVOLVEDORES', 'QUEMSÃO SEUS DESENVOLVEDORES', 'PORQUE VOCÊ FOI CRIADA', 'PORQUE VOCÊ FOI CRIADO', 'QUEMTE CRIOU', 'QUEMTE DESENVOLVEU', 'PORQUEM VOCÊ FOI DESENVOLVIDA', 'PORQUEM VOCÊ FOI DESENVOLVIDO'].includes(userMessage)) {
            finalresult = mainSubject[2][0]
            speech.text = finalresult // DESENVOLVEDORES
        }

        if (['OBJETIVO', 'PROJETO', 'PORQUE VOCE FOI CRIADO?', 'PORQUE VOCE FOI CRIADO ?', 'PORQUE VOCE FOI CRIADO', 'QUALO OBJETIVO DO PROJETO', 'QUALO OBJETIVO DO SEU PROJETO', 'QUALO OBJETIVO DO NOSSO PROJETO', 'QUALÉ O OBJETIVO DO NOSSO PROJETO', 'QUAISSÃO OS SEUS OBJETIVOS', 'QUALÉ O OBJETIVO DO SEU PROJETO'].includes(userMessage)) {
            finalresult = mainSubject[3][0]
            speech.text = finalresult // OBJETIVO DO PROJETO
        }

        if (['ESCOLA', 'ONDE', 'EMQUAL ESCOLA VOCÊ FOI CRIADA', 'EMQUAL ESCOLA VOCÊ FOI CRIADO', 'EMQUAL ESCOLA VOCÊ FOI DESENVOLVIDA', 'EMQUAL ESCOLA VOCÊ FOI DESENVOLVIDO', 'ONDEVOCÊ FOI CRIADA', 'ONDEVOCÊ FOI CRIADO', 'QUALESCOLA VOCÊ FOI CRIADO', 'QUALESCOLA VOCÊ FOI CRIADA', 'ESCOLAVOCÊ FOI CRIADO'].includes(userMessage)) {
            finalresult = mainSubject[4][0]
            speech.text = finalresult // ONDE FOI DESENVOLVIDO
        }



        // ASSUNTO NICHADO - POSTURA
        if (['POSTURA'].includes(userMessage)) {
            finalresult = nicheSubject[0][0]
            speech.text = finalresult
        }
        if (['MAPOSTURA', 'MÁPOSTURA', 'POSTURARUIM', 'MEDIGA O QUE É UMA MÁ POSTURA', 'OQUE É UMA MÁ POSTURA'].includes(userMessage)) {
            finalresult = nicheSubject[0][1]
            speech.text = finalresult // MÁ POSTURA
        }
        if (['POSTURACORRETA', 'COMOTER UMA POSTURA CORRETA', 'COMOTER UMA BOA POSTURA', 'BOA POSTURA', 'COMOÉ TER UMA BOA POSTURA'].includes(userMessage)) {
            finalresult = nicheSubject[0][2]
            speech.text = finalresult // POSTURA CORRETA
        }
        if (['DICASPOSTURA', 'DICASDE POSTURA', 'DICASPOSTURAIS PARA O DIA A DIA'].includes(userMessage)) {
            finalresult = nicheSubject[0][3]
            speech.text = finalresult // DICAS POSTURAIS
        }

        //ASSUNTO NICHADO - ATIVIDADE FÍSICA
        if (['ATIVIDADEFÍSICA', 'ATIVIDADEFISICA'].includes(userMessage)) {
            finalresult = nicheSubject[1][0]
            speech.text = finalresult // ATIVIDADE FÍSICA
        }
        if (['DICASATIVIDADE FÍSICA', 'DICASATIVIDADE FISICA', 'DICASPARA COMEÇAR A PRATICAR EXERCÍCIOS FÍSICOS', 'DICASPARA COMEÇAR A PRATICAR ATIVIDADES FÍSICAS'].includes(userMessage)) {
            finalresult = nicheSubject[1][1]
            speech.text = finalresult // DICAS ATIVIDADE FÍSICA
        }
        if (['BENEFÍCIOSATIVIDADE FÍSICA', 'BENEFICIOSATIVIDADE FISICA', 'BENEFÍCIOSDA ATIVIDADE FÍSICA', 'BENEFÍCIOSDA PRÁTICA DE EXERCÍCIOS FÍSICO', 'BENEFÍCIOSDA PRÁTICA DE ATIVIDADE FÍSICA', 'BENEFÍCIOSDA PRÁTICA DE EXERCÍCIO FÍSICO', 'BENEFÍCIOSDA PRÁTICA DE EXERCÍCIOS FÍSICOS', 'BENEFÍCIOSDA PRÁTICA DE EXERCÍCIO FÍSICOS', 'BENEFÍCIOSDA PRÁTICA DE ATIVIDADE FÍSICA', 'BENEFÍCIOSDA PRÁTICA DE ATIVIDADES FÍSICAS', 'BENEFÍCIOSDA PRÁTICA DE ATIVIDADES FÍSICA', 'BENEFÍCIOSDA PRÁTICA DE ATIVIDADES FÍSICAS'].includes(userMessage)) {
            finalresult = nicheSubject[1][2]
            speech.text = finalresult // BENEFÍCIOS ATIVIDADE FÍSICA
        }


        //ASSUNTO NICHADO - ALIMENTAÇÃO
        if (['ALIMENTAÇÃO'].includes(userMessage)) {
            finalresult = nicheSubject[2][0]
            speech.text = finalresult
        }
        if (['OQUE É SAÚDE ALIMENTAR'].includes(userMessage)) {
            finalresult = nicheSubject[2][1]
            speech.text = finalresult // O QUE É SAÚDE ALIMENTAR
        }
        if (['BENEFÍCIOSDA SÁUDE ALIMENTAR', 'BENEFÍCIOSDA SAÚDE ALIMENTAR'].includes(userMessage)) {
            finalresult = nicheSubject[2][2]
            speech.text = finalresult // BENEFÍCIOS DA SAÚDE ALIMENTAR
        }

        //ASSUNTO NICHADO - SONO
        if (['SONO'].includes(userMessage)) {
            finalresult = nicheSubject[3][0]
            speech.text = finalresult
        }
        if (['QUANDOSURGIU A MEDICINA DO SONO'].includes(userMessage)) {
            finalresult = nicheSubject[3][1]
            speech.text = finalresult // MEDICINA DO SONO?
        }
        if (['OBJETIVODOS PROFISSIONAIS'].includes(userMessage)) {
            finalresult = nicheSubject[3][2]
            speech.text = finalresult // OBJETIVOS DOS PROFICIONAIS?
        }
        if (['DOENÇASRELACIONADAS AO SONO'].includes(userMessage)) {
            finalresult = nicheSubject[3][3]
            speech.text = finalresult // DOENÇAS RELACIONADAS AO SONO
        }


        //ASSUNTO NICHADO - SAÚDE SEXUAL
        if (['SAÚDESEXUAL'].includes(userMessage)) {
            finalresult = nicheSubject[4][0]
            speech.text = finalresult
        }
        if (['COMOTRATAR A SAÚDE SEXUAL'].includes(userMessage)) {
            finalresult = nicheSubject[4][1]
            speech.text = finalresult // COMO TRATAR A SAÚDE SEXUAL
        }
        if (['QUAISOS BENEFÍCIOS DA SAÚDE SEXUAL'].includes(userMessage)) {
            finalresult = nicheSubject[4][2]
            speech.text = finalresult // BENEFÍCIOS DA SAÚDE SEXUAL
        }


        //ASSUNTO NICHADO - SAÚDE MENTAL
        if (['SAÚDEMENTAL'].includes(userMessage)) {
            finalresult = nicheSubject[5][0]
            speech.text = finalresult
        }
        if (['OQUE É SAÚDE MENTAL'].includes(userMessage)) {
            finalresult = nicheSubject[5][1]
            speech.text = finalresult // O QUE É SAÚDE MENTAL
        }
        if (['DOENÇASMENTAIS'].includes(userMessage)) {
            finalresult = nicheSubject[5][2]
            speech.text = finalresult // DOENÇAS MENTAIS
        }
        if (['SERVIÇOSDE AJUDA'].includes(userMessage)) {
            finalresult = nicheSubject[5][3]
            speech.text = finalresult // SERVIÇOS DE AJUDA
        }

        window.speechSynthesis.speak(speech);

        if (finalresult === null) {
            finalresult = "Desculpa não entendi o que você falou..."
        }

        return finalresult
    }

    return redirectToCorrectMessage(message)
}

function showUserMessage(messageUser) {
    messageContainer.innerHTML += `<div class="user-message"><p>${messageUser}</p></div>`
}

function showBotMessage(messageBot) {
    messageContainer.innerHTML += `<div class="bot-message"><p>${messageBot}</p></div>`
}

function executeChatbot(messageUser) {
    showUserMessage(messageUser[0].toUpperCase() + messageUser.substring(1))

    let messageBot = identifyMessage(messageUser)

    let chatbot = new Chatbot(messageBot)
    showBotMessage(messageBot)
    chatbot.playMessage()
    clearMessages()
}

function clearMessages() {
    let messages = messageContainer.childNodes

    if (messageContainer.childElementCount > 2) {
        messageContainer.removeChild(messages[0])
        messageContainer.removeChild(messages[0])
    }
}

microphone.addEventListener("click", activatedSpeakMode)
userTextSubmit.addEventListener("click", sendUserText)

recognition.onresult = e => {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    executeChatbot(transcript);
    console.log(transcript);
}
recognition.onend = function () {
    microphone.style.background = "#91CF59";
}