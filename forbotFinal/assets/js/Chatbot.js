class Chatbot {
    constructor(message) {
        this.message = message
    }

    playMessage() {
        const speech = new SpeechSynthesisUtterance();
        speech.text = this.message;
    }
}