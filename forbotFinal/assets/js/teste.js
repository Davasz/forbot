const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const microphone = document.getElementById('user-voice')
const userTextSubmit = document.getElementById('user-text-submit')
let messageContainer = document.querySelector('.show-messages')
