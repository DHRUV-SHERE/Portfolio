function locoCall() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
// locoCall()
const api_url="./Api.js"
async function showProjects(){
    const response= await fetch(api_url);
    const data=await response.json()
}



var tl=gsap.timeline()
tl.from(".load h3",{
    x:40,
    opacity:0,
    duration: 1,
    stagger:0.3,
})

tl.to(".load h3",{
    opacity:0,
    x:-20,
    duration:1,
    stagger:0.1
})

tl.to(".load",{
    opacity:0,
})
// tl.from(".container-1",{
//     y:100,
//     opacity:0,
//     stagger:0.1,
//     duration:0.5,
//     delay:-0.5
// })
tl.to(".load",{
    display:"none"
})

// Social Media
document.addEventListener("DOMContentLoaded", () => {
    const shareBtn = document.querySelector(".share-btn");
    const socialButtons = document.querySelector(".social-buttons");

    shareBtn.addEventListener("click", () => {
        socialButtons.classList.toggle("active");
        const cards = document.querySelectorAll(".social-buttons div");

        cards.forEach((card, index) => {
            if (socialButtons.classList.contains("active")) {
                setTimeout(() => {
                    card.style.transform = "scale(1)";
                }, index * 100);
            } else {
                setTimeout(() => {
                    card.style.transform = "scale(0)";
                }, index * 100);
            }
        });
    });
});

// Hero Section

document.addEventListener("DOMContentLoaded", function() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'DBMS', 'Bootstrap', 'Github']; // Add more skills as needed
    let skillIndex = 0;
    const typedTextElement = document.querySelector('.typed-text');
    const cursorElement = document.querySelector('.cursor');

    function typeSkill(skill) {
        typedTextElement.textContent = '';
        let charIndex = 0;

        function typeChar() {
            if (charIndex < skill.length) {
                typedTextElement.textContent += skill.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 150);
            } else {
                setTimeout(deleteSkill, 2000);
            }
        }
        typeChar();
    }

    function deleteSkill() {
        const currentText = typedTextElement.textContent;
        let charIndex = currentText.length;

        function deleteChar() {
            if (charIndex > 0) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteChar, 100);
            } else {
                skillIndex = (skillIndex + 1) % skills.length;
                setTimeout(() => typeSkill(skills[skillIndex]), 500);
            }
        }

        deleteChar();
    }

    // Initial call
    if (typedTextElement && cursorElement) {
        typeSkill(skills[skillIndex]);
    } else {
        console.error("Typed text or cursor element not found.");
    }
});


// Skill
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    const popupContainer = document.getElementById('popupContainer');
    const closeButton = document.getElementById('closeButton');
    
    // Function to fetch data from API
    async function fetchData() {
        try {
            const response = await fetch('./API/Language.json'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data.languages;
        } catch (error) {
            console.error("Error fetching the data: ", error);
        }
    }
    
    // Function to show popup with language details
    function showPopup(skillData) {
        const LanguageNamePopup = document.getElementById('LanguageNamePopup');
        const LanguageLogoPopup = document.getElementById('LanguageLogoPopup');
        const LanguageFounderPopup = document.getElementById('LanguageFounderPopup');
        const LanguageLaunchDatePopup = document.getElementById('LanguageLaunchDatePopup');
        const LanguageDescriptionPopup = document.getElementById('LanguageDescriptionPopup');
    
        LanguageNamePopup.textContent = skillData.name;
        LanguageLogoPopup.src = skillData.logo;
        LanguageFounderPopup.textContent = `Founder: ${skillData.founder}`;
        LanguageLaunchDatePopup.textContent = `Launch Date: ${skillData.launch_date}`;
        LanguageDescriptionPopup.textContent = skillData.description;
    
        popupContainer.style.display = 'block';
    }
    
    // Event listeners for skill cards
    skillCards.forEach(card => {
        card.addEventListener('click', async () => {
            const languagesData = await fetchData();
            const skillName = card.id; // Assuming card id matches skill name
            if (skillName && languagesData.hasOwnProperty(skillName)) {
                const skillData = languagesData[skillName];
                showPopup(skillData);
            } else {
                console.error(`Skill data for ${skillName} not found.`);
            }
        });
    });
    
    // Close the popup when the close button is clicked
    closeButton.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });
    
    // Close the popup when clicking outside the popup content
    window.onclick = function(event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    };
});
