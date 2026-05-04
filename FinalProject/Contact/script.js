document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const status = document.getElementById('formStatus');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 1) Sending the Message
    status.innerText = "Sending your message...";
    status.style.color = "#ffffff";

    // 2) Checking if Form is Valid
    if (name === "" || email === "" || message === "") {
        
    
    // Indicate a successful sent message
    setTimeout(() => {
        status.innerText = "Message sent successfully! I'll get back to you soon.";
        status.style.color = "#4BB543"; 
        this.reset(); // Clears the form fields
    }, 2000);
});
