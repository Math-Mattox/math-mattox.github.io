document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    const status = document.getElementById('formStatus');
    status.innerText = "Sending your message...";
    status.style.color = "#76bdff";

    // Indicate a successful sent message
    setTimeout(() => {
        status.innerText = "Message sent successfully! I'll get back to you soon.";
        status.style.color = "#4BB543"; 
        this.reset(); // Clears the form fields
    }, 2000);
});
