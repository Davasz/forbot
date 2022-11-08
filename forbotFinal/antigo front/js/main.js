
let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let saudacao = ["Olá, meu nome é ForBot!", "Oi, eu sou um robo chamado ForBot", "Olá, eu estou ótimo", "Estou muito bem"];

let ajuda = ["Eu posso lhe oferecer informações sobre: <p> Postura; </p> Atividade Física; <p> Alimentação; </p> Saúde do Sono; <p> Saúde Mental; <p> Saúde Sexual; </p> Posso também apresentar mais informações sobre mim (ForBot), como: <p> Quem são meus desenvolvedores; </p> Qual é o objetivo do nosso projeto; <p> Qual escola eu fui criado. </p>", "Certo, eu posso lhe oferecer informações sobre: <p> Postura; </p> Atividade Física; <p> Alimentação; </p> Saúde do Sono; <p> Saúde Mental; </p> Posso também apresentar mais informações sobre mim (ForBot), como: <p> Quem são meus desenvolvedores; </p> Qual é o objetivo do nosso projeto; <p> Qual escola eu fui criado. </p>", "Sinta-se a vontade para perguntar sobre qualquer um desses assuntos!"];
let dev = ["Meus principais desenvolvedores são: Ariel Aio, João Monção e Davi Ribeiro (pai de planta), porém várias pessoas fazem parte desse belo projeto, tais como: Amanda, Jhenifer, Mariana, Gabriel Agueira, Higor, Arthur e Cínthia"]
let objetivo = ["Nosso principal objetivo é melhorar a qualidade de vida e bem-estar de todas as pessoas, visando construir a possibilidade de um futuro melhor através de hábitos saudáveis"]
let escola = ["Eu fui desenvolvido na instituição ETEC Prof. Armando José Farinazzo, localizada em Fernandópolis city."];

let postura = ["Posso lhe dar informações sobre: <p> O que é uma má postura; </p> Como ter uma postura correta; <p> Dicas posturais para o dia a dia. </p>"]
let mapostura = ["A má postura é um problema que ocorre muito nos dias atuais, principalmente por conta do sedentarismo ou até pela falta de hábito postural. Se baseia na pessoa que deixa de se beneficiar com uma boa postura, trazendo malefícios para si, como a aparência de dores musculares e torcicolos pelo corpo todo. "]
let boapostura = ["A postura correta é a posição em que você mantem seu corpo e coluna vertebral de forma ereta contra a gravidade, respeitando as curvas fisiológicas. Essa correção postural deve ser executada ao manter-se de pé, assim como sentado(a) ou deitado(a). <p> Apesar de ser essencial, nem sempre é algo fácil corrigir a postura ou mantê-la, pois envolve um treinamento e uma educação corporal, para então, a musculatura poder se permitir suportar a tensão sobre as articulações e as outras partes do corpo. </p> Dessa forma, é perceptível que tem-se diversos benefícios direcionados a pessoa que possui uma postura correta, a lista a seguir mostra alguns destes: <p> - Mantém os ossos e articulações no alinhamento correto para que os músculos sejam usados corretamente; </p> - Ajuda a diminuir o impacto nas superfícies articulares, que podem resultar em artrite/artrose; <p> - Diminui o stress sobre os ligamentos que prendem as articulações da coluna entre si (sobrecarga/edema ligamentar); </p> - Evita que a coluna fique rígida em posições anormais; <p> - Previne o cansaço; </p> - Evite problema de tensão muscular e sobrecarga; <p> - Previne dores nas costas e dor muscular (mialgias); </p> - Contribui para uma boa aparência."]
let dicaspostura = ["Sente-se com as costas retas e os ombros para trás. Os glúteos devem tocar a parte traseira da sua cadeira; <p> - Lembre-se de distribuir o peso do corpo uniformemente em ambos os quadris; </p> - Quando estiver dirigindo, se não estiver bem adaptado ao banco do automóvel, use um apoio na curvatura lombar. Os joelhos devem estar no mesmo nível ou mais alto do que seus quadris. <p> - Em casos onde é preciso levantar objetos, mantenha os pés firmes e estáveis no chão, costas retas e dobras nos joelhos e quadris; </p> - Caso esteja de pé, mantenha um pé à frente do outro, com os joelhos ligeiramente flexionados, isso tira a pressão da sua lombar; <p> - Pare de fumar, os fumantes estão mais propensos a terem dor nas costas, pois a nicotina restringe o fluxo de sangue para os discos, que amortecem as vértebras."]

let atividadefisica = ["Posso lhe oferecer informações sobre: Dicas para começar a praticar exercícios físicos; Alguns benefícios da pratica de exercícios físicos são; Duração para pratica de exercícios físicos."]
let dicasatividadefisica = ["Encontre um local adequado para praticar as atividades físicas, comece com uma atividade que não exige alto preparo físico; Procure atividades realizadas por várias pessoas, inclusive do seu círculo de amizade, o que poderá ser um estímulo a mais."]
let beneficiosatividadefisica = ["A atividade física previne o desenvolvimento de doenças crônicas, como hipertensão e diabetes. As atividades físicas controlam os níveis de colesterol. A atividade física pode ser uma importante aliada no tratamento da depressão e ansiedade."]

let sexo = [""]

let alimentacao = [""]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function carregou() {
    const speech = new SpeechSynthesisUtterance();
    let msg1 = saudacao[0];
    let msgr1 = speech.text
    msgr1 = msg1
    let msg2 = ajuda[0];
    let msgr2 = speech.text
    msgr2 = msg2
    let msg3 = ajuda[2];
    let msgr3 = speech.text
    msgr3 = msg3
    chatareamain.appendChild(showchatbotmsg(msgr1));
    chatareamain.appendChild(showchatbotmsg(msgr2));
    chatareamain.appendChild(showchatbotmsg(msgr3));
}
function showusermsg(usermsg) {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Error";
    if (message.includes('olá')) {
        let finalresult = saudacao[0];
        speech.text = finalresult;
    }
    if (message.includes('Oi')) {
        let finalresult = saudacao[1];
        speech.text = finalresult;
    }
    if (message.includes('como vai')) {
        let finalresult = saudacao[2];
        speech.text = finalresult;
    }
    if (message.includes('tudo bem')) {
        let finalresult = saudacao[3];
        speech.text = finalresult;
    }




    if (message.includes('ajuda')) {
        let finalresult = ajuda[Math.floor(Math.random() * ajuda.length)];
        speech.text = finalresult;
    }
    if (message.includes('desenvolvedores')) {
        let finalresult = dev[Math.floor(Math.random() * dev.length)];
        speech.text = finalresult;
    }
    if (message.includes('objetivo projeto')) {
        let finalresult = objetivo[Math.floor(Math.random() * objetivo.length)];
        speech.text = finalresult;
    }
    if (message.includes('escola')) {
        let finalresult = escola[Math.floor(Math.random() * escola.length)];
        speech.text = finalresult;
    }




    if (message.includes('postura')) {
        let finalresult = postura[Math.floor(Math.random() * postura.length)];
        speech.text = finalresult;
    }
    if (message.includes('má postura')) {
        let finalresult = badposture[Math.floor(Math.random() * mapostura.length)];
        speech.text = finalresult;
    }
    if (message.includes('postura correta')) {
        let finalresult = goodposture[Math.floor(Math.random() * boapostura.length)];
        speech.text = finalresult;
    }
    if (message.includes('dicas postura')) {
        let finalresult = clueposture[Math.floor(Math.random() * dicaspostura.length)];
        speech.text = finalresult;
    }



    if (message.includes('atividade física')) {
        let finalresult = atividadefisica[Math.floor(Math.random() * atividadefisica.length)];
        speech.text = finalresult;
    }
    if (message.includes('dicas atividade física'), ('dicas exercício físico')) {
        let finalresult = dicasatividadefisica[Math.floor(Math.random() * dicasatividadefisica.length)];
        speech.text = finalresult;
    }
    if (message.includes('benefícios')) {
        let finalresult =  beneficiosatividadefisica[Math.floor(Math.random() *  beneficiosatividadefisica.length)];
        speech.text = finalresult;
    }
   
    


    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function (e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend = function () {
    mic.style.background = "#ff3b3b";
}
mic.addEventListener("click", () => {
    mic.style.background = '#39c81f';
    recognition.start();
    console.log("Activated");
})
    