// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Improved form validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        e.preventDefault();
        displayMessage('Please fill in all fields.', 'error');
    } else if (!emailPattern.test(email)) {
        e.preventDefault();
        displayMessage('Please enter a valid email address.', 'error');
    } else {
        displayMessage('Thank you for your message!', 'success');
    }
});

// Function to display messages
function displayMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.textContent = message;
    messageContainer.className = type === 'error' ? 'error-message' : 'success-message';
    document.body.appendChild(messageContainer);
    setTimeout(() => {
        messageContainer.remove();
    }, 3000);
}
