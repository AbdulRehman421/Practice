const socket = io();
let name;
do {
    name = prompt('Enter your name')
} while (!name)

let textArea = document.getElementById('textarea');

textArea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

const sendMessage = (msg) => {
    let message = {
        user: name,
        message: msg.trim()
    }
    // Append the message to the chat
    appendMessage(message, 'outgoing')
    textArea.value = ""
    scrollToBottom()
    // send to server
    socket.emit('message', message)
}

let messageArea = document.querySelector('.messageArea');
const appendMessage = (message, type) => {
    let messageDiv = document.createElement('div');
    let className = type;
    messageDiv.classList.add(className, 'message')
    let markUp = `
    <h4>
    ${message.user}
    </h4>
    <p>
    ${message.message}
    </p>
    `
    messageDiv.innerHTML = markUp
    messageArea.appendChild(messageDiv)
}

socket.on('message', (message) => {
    appendMessage(message, 'incoming')
    scrollToBottom()
})

const scrollToBottom = () => {
    messageArea.scrollTop = messageArea.scrollHeight
}