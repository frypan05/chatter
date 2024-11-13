function sendMessage() {
    const message = document.getElementById('messageInput').value;
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.text())
    .then(result => {
        console.log(result); // Log the result from the server
        getMessages(); // Refresh messages after sending
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}

function getMessages() {
    fetch('/get-messages')
    .then(response => response.json())
    .then(messages => {
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML = messages.map(msg => `<div>${msg}</div>`).join('');
    })
    .catch(error => {
        console.error('Error getting messages:', error);
    });
}

getMessages(); // Fetch messages when the page loads
setInterval(getMessages, 5000);