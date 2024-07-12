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


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: form.name.value,
            mobile: form.mobile.value,
            email: form.email.value,
            message: form.message.value
        };

        const response = await fetch('http://localhost:5000/submit_contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
        } else {
            alert(`Error: ${result.error}`);
        }
    });

    // Animation using GSAP
    gsap.from(".contact-page", { duration: 1, opacity: 0, y: -50 });
    gsap.from(".container", { duration: 1, opacity: 0, x: -50 });
    gsap.from(".contact-info", { duration: 1, opacity: 0, x: 50 });
    gsap.from(".form-group", { duration: 1, opacity: 0, y: 50, stagger: 0.3 });
});