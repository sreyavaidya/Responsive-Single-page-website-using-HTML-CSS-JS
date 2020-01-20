const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navlinks.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`
            } 
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
//scrollmagic
function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    .addIndicators()
    .addTo(controller);
}

splitScroll();

