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
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    if (menu.classList.contains('menu-open')) {
        menu.style.height = "80vh";
        menu.style.opacity = "1";
    } else {
        menu.style.height = "0";
        menu.style.opacity = "0";
    }
});

//Navbar Solid on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > offset) {
        navbar.classList.add("navbar-active");
    } else {
        navbar.classList.remove("navbar-active");
    }
});

//Navbar Animation
gsap.from("#navbar", {
    scrollTrigger: {
        trigger: "#navbar"
    },
    y: -200,
    opacity: 0,
    duration: 0.8
})

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
gsap.to(".weaving", {
    backgroundPosition: "50% -100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".weaving",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.2
    }
});

gsap.from(".weTop", {
    scrollTrigger: {
        trigger: ".weTop",
        start: "top bottom"
    },
    y: 115,
    opacity: 0,
    duration: 1
})

gsap.from(".weBot", {
    scrollTrigger: {
        trigger: ".weBot",
        end: "bottom 100px",
        scrub: 0.5
    },
    y: 100,
    opacity: 0,

})

//Finishing
gsap.to(".finishing", {
    backgroundPosition: "50% -100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".finishing",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.2
    }
})

gsap.from(".fta1", {
    scrollTrigger: {
        trigger: ".fta1",
        start: "top bottom",
        end: "bottom top"
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1
})


//Footer
gsap.from(".fca1", {
    scrollTrigger: {
        trigger: ".fca1",
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 0.5
})

gsap.from(".fca2", {
    scrollTrigger: {
        trigger: ".fca2",
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 0.5
})

gsap.from(".fca3", {
    scrollTrigger: {
        trigger: ".fca3",
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 0.5
})


//==Contact Page==//

gsap.from(".csa1", {
    scrollTrigger: {
        trigger: ".csa1"
    },
    stagger: true,
    y: 100,
    opacity: 0,
    duration: 1
})


//==Gallery Page==//

gsap.from(".gta1", {
    scrollTrigger: {
        trigger: ".gta1",
    },
    stagger: 0.2,
    y:100,
    opacity: 0,
    duration: 1
})

gsap.from(".gal_img", {
    scrollTrigger: {
        trigger: ".gal_img"
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1
})