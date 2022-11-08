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
            "Olá, eu estou ótimo!",
            "Estou muito bem."
        ],
        ajuda = [
            "Eu posso lhe oferecer informações sobre: <p> Postura; </p> Atividade Física; <p> Alimentação; </p> Saúde do Sono; <p> Saúde Mental; <p> Saúde Sexual; </p> Posso também apresentar mais informações sobre mim (ForBot), como: <p> Quem são meus desenvolvedores; </p> Qual é o objetivo do nosso projeto; <p> Qual escola eu fui criado. </p>", "Certo, eu posso lhe oferecer informações sobre: <p> Postura; </p> Atividade Física; <p> Alimentação; </p> Saúde do Sono; <p> Saúde Mental; </p> Posso também apresentar mais informações sobre mim (ForBot), como: <p> Quem são meus desenvolvedores; </p> Qual é o objetivo do nosso projeto; <p> Qual escola eu fui criado. </p>", "Sinta-se a vontade para perguntar sobre qualquer um desses assuntos!"
        ],
        dev = [
            "Meus principais desenvolvedores são: Ariel Aio, João Monção, Arthur Risso e Davi Ribeiro, porém várias pessoas fazem parte desse belo projeto, tais como: Amanda, Jhenifer, Mariana, Gabriel Agueira, Higor, Arthur e Cínthia"
        ],
        objetivo = [
            "Nosso principal objetivo é melhorar a qualidade de vida e bem-estar de todas as pessoas, visando construir a possibilidade de um futuro melhor através de hábitos saudáveis"
        ],
        escola = [
            "Eu fui desenvolvido na instituição ETEC Prof. Armando José Farinazzo, localizada em Fernandópolis-SP."
        ],
    ]

    let nicheSubject = [
        postura = [
            "Posso lhe dar informações sobre: <p> O que é uma má postura; </p> Como ter uma postura correta; <p> Dicas posturais para o dia a dia. </p>", // Texto índice | 0
            "A má postura é um problema que ocorre muito nos dias atuais, principalmente por conta do sedentarismo ou até pela falta de hábito postural. Se baseia na pessoa que deixa de se beneficiar com uma boa postura, trazendo malefícios para si, como a aparência de dores musculares e torcicolos pelo corpo todo. ", // Postura ruim | 1 
            "A postura correta é a posição em que você mantem seu corpo e coluna vertebral de forma ereta contra a gravidade, respeitando as curvas fisiológicas. Essa correção postural deve ser executada ao manter-se de pé, assim como sentado(a) ou deitado(a). <p> Apesar de ser essencial, nem sempre é algo fácil corrigir a postura ou mantê-la, pois envolve um treinamento e uma educação corporal, para então, a musculatura poder se permitir suportar a tensão sobre as articulações e as outras partes do corpo. </p> Dessa forma, é perceptível que tem-se diversos benefícios direcionados a pessoa que possui uma postura correta, a lista a seguir mostra alguns destes: <p> - Mantém os ossos e articulações no alinhamento correto para que os músculos sejam usados corretamente; </p> - Ajuda a diminuir o impacto nas superfícies articulares, que podem resultar em artrite/artrose; <p> - Diminui o stress sobre os ligamentos que prendem as articulações da coluna entre si (sobrecarga/edema ligamentar); </p> - Evita que a coluna fique rígida em posições anormais; <p> - Previne o cansaço; </p> - Evite problema de tensão muscular e sobrecarga; <p> - Previne dores nas costas e dor muscular (mialgias); </p> - Contribui para uma boa aparência.", // Postura boa | 2
            "Sente-se com as costas retas e os ombros para trás. Os glúteos devem tocar a parte traseira da sua cadeira; <p> - Lembre-se de distribuir o peso do corpo uniformemente em ambos os quadris; </p> - Quando estiver dirigindo, se não estiver bem adaptado ao banco do automóvel, use um apoio na curvatura lombar. Os joelhos devem estar no mesmo nível ou mais alto do que seus quadris. <p> - Em casos onde é preciso levantar objetos, mantenha os pés firmes e estáveis no chão, costas retas e dobras nos joelhos e quadris; </p> - Caso esteja de pé, mantenha um pé à frente do outro, com os joelhos ligeiramente flexionados, isso tira a pressão da sua lombar; <p> - Pare de fumar, os fumantes estão mais propensos a terem dor nas costas, pois a nicotina restringe o fluxo de sangue para os discos, que amortecem as vértebras.", // Dicas de postura | 3
        ],
    ]


    function redirectToCorrectMessage(msg) {
        userMessage = msg.toUpperCase()
        userMessageSplits = userMessage.split(" ")

        const speech = new SpeechSynthesisUtterance()
        speech.text = "Desculpa, não entendi o que você disse."

        let finalresult = null

        userMessageSplits.map(message => {
            if (['OLÁ', 'OLA', 'OI', 'OII', 'OIE', 'OLAA', 'EAI', 'SALVE', 'COMO VAI', 'TUDO BEM'].includes(message)) {
                finalresult = mainSubject[0][Math.floor(Math.random() * 2)]
                speech.text = finalresult
            }

            if (['AJUDA', 'AJUDA?', 'AJUDA ME', 'AJUDA-ME', 'ME AJUDA', 'PRECISO DE AJUDA', 'HELP', 'AJUDAR', 'AJUDAR?', 'AJUDARIA', 'AJUDARA', 'AJUDARÁ', 'AJUDE ME', 'AJUDE-ME', 'ME AJUDE',].includes(message)) {
                finalresult = mainSubject[1][0]
                speech.text = finalresult
            }

            if (['DESENVOLVEDORES', 'PROGRAMADORES', 'DEVS', 'PROGRAMADOR', 'DESENVOLVEDOR', 'DEV', 'PROGRAMAÇÃO', 'PROGRAMAÇAO', 'PROGRAMACAO'].includes(message)) {
                finalresult = mainSubject[2][0]
                speech.text = finalresult
            }

            if (['OBJETIVO', 'PROJETO'].includes(message)) {
                finalresult = mainSubject[3][0]
                speech.text = finalresult
            }

            if (['ESCOLA', 'ONDE'].includes(message)) {
                finalresult = mainSubject[4][0]
                speech.text = finalresult
            }
        })



        // ASSUNTO NICHADO - POSTURA
        if (message.includes('postura')) {
            finalresult = nicheSubject[0][0]
            speech.text = finalresult
        }
        if (message.includes('má postura')) {
            finalresult = nicheSubject[0][1]
            speech.text = finalresult
        }
        if (message.includes('postura correta')) {
            finalresult = nicheSubject[0][2]
            speech.text = finalresult
        }
        if (message.includes('dicas postura')) {
            finalresult = nicheSubject[0][3]
            speech.text = finalresult
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
    
    console.log(messageContainer.childNodes)
    if(messageContainer.childElementCount > 2) {
        console.log(messageContainer.childNodes)
        messageContainer.removeChild(messages[0])
        messageContainer.removeChild(messages[0])
    }
}

microphone.addEventListener("click", activatedSpeakMode)
userTextSubmit.addEventListener("click", sendUserText)

recognition.onresult = function (e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend = function () {
    microphone.style.background = "#91CF59";
}