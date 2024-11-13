const express = require('express');
const app = express();
const PORT = 'https://gappe-five.vercel.app/';

// Array to store messages
let messages = [];

app.use(express.json()); // Parse JSON bodies
app.use(express.static('public')); // Serve static files from the 'public' directory

// Route to send a message
app.post('/send-message', (req, res) => {
const { message } = req.body;
messages.push(message); // Store the received message
console.log('Received message:', message);
res.send('Message received!');
});

// Route to retrieve messages
app.get('/get-messages', (req, res) => {
res.json(messages); // Return all stored messages
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});