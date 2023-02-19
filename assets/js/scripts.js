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