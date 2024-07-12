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
tl.from(".container-1",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
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
    const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'DBMS','Bootstrap','Github']; // Add more skills as needed
    let skillIndex = 0;
    const skillTypeElement = document.getElementById('skillType');

    function typeSkills() {
        skillTypeElement.textContent = skills[skillIndex];
        skillIndex = (skillIndex + 1) % skills.length;
        skillType.style.color= "#BB86FC";
        skillType.style.fontSize= "5VH";
    }

    // Initial call
    typeSkills();
    // Repeat every 2 seconds (adjust timing as needed)
    setInterval(typeSkills, 2000);
});
