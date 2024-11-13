

const axios = require('axios');
const apiKey = 'Eh0VbTR5FCEWTk3dwhVYnkl0rkJBIq7M';
let pasteId;

// Create a new paste on Pastebin
async function createPaste(content) {
    const response = await axios.post('https://pastebin.com/api/api_post.php', {
        api_dev_key: apiKey,
        api_option: 'paste',
        api_paste_code: content,
        api_paste_private: '2', // Private paste
        api_paste_expire_date: '1H' // Paste expires in 1 hour
    });

    pasteId = response.data.split('/').pop(); // Extract paste ID from the response URL
}

// Update an existing paste on Pastebin
async function updatePaste(content) {
    await axios.post('https://pastebin.com/api/api_post.php', {
        api_dev_key: apiKey,
        api_option: 'edit',
        api_paste_code: content,
        api_paste_private: '2',
        api_paste_expire_date: '1H',
        api_paste_key: pasteId
    });
}

// Retrieve the content of a paste from Pastebin
async function getPasteContent() {
    const response = await axios.get(`https://pastebin.com/raw/${pasteId}`);
    return response.data;
}

// Endpoint to receive messages from frontend
app.post('/send-message', async (req, res) => {
    const message = req.body.message;
    if (!pasteId) {
        await createPaste(message);
    } else {
        await updatePaste(message);
    }
    res.send('Message sent successfully');
});

// Endpoint to retrieve messages for frontend
app.get('/get-messages', async (req, res) => {
    const content = await getPasteContent();
    res.send(content);
});