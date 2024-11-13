const express = require('express');
const app = require('./app');

const router = express.Router();

router.post('https://gappe-five.vercel.app/send-message', async (req, res) => {
    // Your route handling logic here
});

module.exports = router;