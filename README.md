# chatter

# 🗣️ 1-on-1 Chat App using Pastebin API

This is a simple yet creative one-on-one chat application built using **Socket.IO** for real-time communication and the **Pastebin API** for message storage and retrieval.

### 🚀 Features

- 🔒 Private 1-to-1 chat interface
- 📥 Message persistence via Pastebin API
- ⚡ Real-time messaging powered by Socket.IO
- 🧼 Clean and minimal frontend interface
- 📜 Pastes expire automatically (based on settings)

### 🧠 How It Works

- When a user sends a message, it is stored as a **Pastebin paste**.
- The Pastebin API generates a unique paste link (or ID), which is shared in the chat.
- The receiving user can fetch and read the message in real-time.
- Socket.IO handles the real-time events like "message sent" and "message received".

### 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (or React if you're using it)
- **Backend**: Node.js + Express + Socket.IO
- **Third-Party API**: Pastebin (for storing and retrieving messages)

### 🔧 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/frypan05/chatter.git
   cd chatter
