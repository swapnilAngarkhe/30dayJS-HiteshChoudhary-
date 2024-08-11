const socket = io('http://localhost:8000');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('msgInp');
const messageContainer = document.querySelector('.container');

const name = prompt('Please enter your name to join'); 

const append = (msg, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = msg;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);


    // Trigger animation 
    setTimeout(() => {
        messageElement.classList.add('show');
    }, 10);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        console.log('Sending message:', message);
        append(`You: ${message}`, 'right');
        socket.emit('send', message);
        messageInput.value = '';
    } else {
        console.log('Message is empty');
    }
});

// Notify server of new user
socket.emit('new-user-joined', name);

socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'left');
});

socket.on('receive', data => {
    console.log('Received message:', data);
    append(`${data.name}: ${data.message}`, 'left');
});
