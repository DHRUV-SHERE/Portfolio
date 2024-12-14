document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
    });

    // Animation using GSAP
    gsap.from(".contact-page", { duration: 1, opacity: 0, y: -50 });
    gsap.from(".container", { duration: 1, opacity: 0, scale: 0.9, delay: 0.5 });
    gsap.from("h1, p, .contact-info, form", { duration: 1, opacity: 0, y: 20, stagger: 0.2, delay: 1 });
});

document.addEventListener("contextmenu",function(i){
    i.preventDefault()
},false)


// Include EmailJS SDK
import emailjs from "https://cdn.jsdelivr.net/npm/emailjs-com@3.2.0/dist/email.min.js";

// Initialize EmailJS
emailjs.init("G3P48wd0AD6_lUVxK");  // Replace with your actual Public Key

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contactForm");

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            mobile: document.getElementById("mobile").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_mvmzvlq", "template_ofep908", formData)
            .then(() => {
                alert("Message Sent Successfully!");
                form.reset();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to send the message. Please try again.");
            });
    });

    // Animation using GSAP
    gsap.from(".contact-page", { duration: 1, opacity: 0, y: -50 });
    gsap.from(".container", { duration: 1, opacity: 0, scale: 0.9, delay: 0.5 });
    gsap.from("h1, p, .contact-info, form", { duration: 1, opacity: 0, y: 20, stagger: 0.2, delay: 1 });

    // Disable Right-Click
    document.addEventListener("contextmenu", (event) => event.preventDefault(), false);
});
