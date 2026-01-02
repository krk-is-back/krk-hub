document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const hubTitle = document.getElementById('hub-title');
    const chatContainer = document.getElementById('chat-container');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    const levelUpBtn = document.getElementById('level-up-btn');

    // Fade out intro after 3 seconds
    setTimeout(() => {
        hubTitle.classList.add('fade-out');
        setTimeout(() => {
            introScreen.style.display = 'none';
            chatContainer.classList.remove('hidden');
        }, 2000); // Match fade duration
    }, 3000);

    // Send message function
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'sent');
            messageDiv.textContent = message;
            chatMessages.appendChild(messageDiv);
            messageInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
        }
    }

    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Level Up button: Fun theme change
    levelUpBtn.addEventListener('click', () => {
        document.body.style.background = 'linear-gradient(135deg, #000080, #800080)'; // Purple/blue shift
        alert('Leveled up! Theme changed for epic vibes.');
    });

    // Simulate incoming messages (for demo; replace with real backend)
    setInterval(() => {
        if (Math.random() > 0.8) { // Random chance
            const fakeMessages = ['GG!', 'Nice shot!', 'Let\'s raid!', 'KRK is awesome!'];
            const randomMsg = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'received');
            messageDiv.textContent = randomMsg;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }, 5000); // Every 5 seconds
});