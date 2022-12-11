class Chatbot {
    constructor(message) {
        this.message = message
    }

    playMessage(mute) {
        const speech = new SpeechSynthesisUtterance(this.message);
        speech.lang = 'pt-br'
        window.speechSynthesis.cancel(speech)
        speech.text = this.message;
        console.log(mute)
        if(mute) {
            speech.volume = 0
        }
        window.speechSynthesis.speak(speech);

        
    }

}


