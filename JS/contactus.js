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