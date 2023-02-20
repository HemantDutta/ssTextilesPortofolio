//Javascript for S.S. Textiles
//Written By Hemant Dutta

//Plugins and Dependencies
gsap.registerPlugin(ScrollTrigger);

//===Navbar===//
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu");

//PX offset for active navbar
const offset = 50;

//Menu Activation Button
menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('menu-open');
    if(menu.classList.contains('menu-open'))
    {
        menu.style.height = "80vh";
        menu.style.opacity = "1";
    }
    else
    {
        menu.style.height = "0";
        menu.style.opacity = "0";
    }
});

//Navbar Solid on Scroll
window.addEventListener("scroll", ()=>{
   if(window.scrollY>offset)
   {
       navbar.classList.add("navbar-active");
   }
   else{
       navbar.classList.remove("navbar-active");
   }
});

//Intro Section

//Background
gsap.to(".intro", {
    backgroundPosition: "50% -100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".intro",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.2
    }
});

//Brand Name Animation
gsap.to(".itha1", {
    y: 0,
    stagger: 0.2,
    delay: 0.2,
    opacity: 1,
    duration: 1
})

//Brand Description Animation
gsap.to(".itpa1", {
    stagger: 0.2,
    delay: 0.2,
    opacity: 1,
    duration: 1
})


//Dyeing Section
gsap.to(".image-cont", {
    backgroundPosition: "100% 65%",
    ease: "none",
    scrollTrigger: {
        trigger: ".image-cont",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5
    }
});

gsap.from("#dyTop", {
    scrollTrigger: {
        trigger: ".dyeing",
    },
    y: 115,
    opacity: 0,
    duration: 1
})

gsap.from(".image-cont", {
    scrollTrigger: {
        trigger: ".image-cont",
        start: "top bottom"
    },
    y: 200,
    opacity: 0,
    duration: 1
})

gsap.from("#dyBot", {
    scrollTrigger: {
        trigger: "#dyBot",
    },
    y: 115,
    opacity: 0,
    duration: 1
})

//Weaving Section

gsap.from(".weTop", {
    scrollTrigger: {
        trigger: ".weTop",
        start: "top bottom"
    },
    y: 115,
    opacity: 0,
    duration:1
})

gsap.from(".weBot", {
    scrollTrigger: {
        trigger: ".weBot",
        end: "bottom 100px",
        scrub: 0.5
    },
    x: 100,
    opacity: 0,

})