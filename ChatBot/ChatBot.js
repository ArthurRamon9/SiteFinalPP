function addMessageToLog(message, sender) {
    var chatLog = document.getElementById('chat-log');
    var messageElement = document.createElement('div');
    messageElement.className = sender;
    messageElement.innerText = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function handleUserInput() {
    var userInput = document.getElementById('user-input');
    var userMessage = userInput.value;
    addMessageToLog(userMessage, 'user');
    userInput.value = '';
    sendButton.disabled = true;
    sendButton.classList.add('loading');
    getChatbotResponse(userMessage);
}

function getChatbotResponse(userMessage) {
    setTimeout(function () {
        var response = 'Esta é a resposta do chatbot para a pergunta: ' + userMessage;
        addMessageToLog(response, 'chatbot');
        sendButton.disabled = false;
        sendButton.classList.remove('loading');
    }, 1000);
}

var sendButton = document.getElementById('send-btn');
sendButton.addEventListener('click', handleUserInput);

var userInput = document.getElementById('user-input');
userInput.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        handleUserInput();
    }
});
