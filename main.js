/*=============== SHOW MENU ===============*/

const navMenu=document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click',linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

// function scrollHeader(){
//     const header = document.getElementById('header');
//     if(this.scorllY >= 80) { header.classList.add('scroll-header');}
//     else { header.classList.remove('scroll-header');}
// }
// window.addEventListener('scroll',scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

// function scrollUp(){
//     const scrollUp = document.getElementById('scroll-up');
//     if (this.scorllY >= 350) scrollUp.classList.add('show-scroll');
//     else scrollUp.classList.remove('show-scroll');
// }
// window.addEventListener('scroll',scrollUp);

const scrolll = document.querySelector(".scrollup");

window.addEventListener("scroll",() => {
    if (window.pageYOffset > 350){
        scrolll.classList.add("active")
    } else {
        scrolll.classList.remove("active")
    }
})


/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'), 
 tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.target);
        console.log(target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab)=>{
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});


/*=============== CONTACT FORM =============== */

const contactForm = document.getElementById('contact-form'), 
 contactName = document.getElementById('contact-name'),

 contactEmail = document.getElementById('contact-email'),

 contactSubject = document.getElementById('contact-subject'), contactMessage = document.getElementById('contact-message'),

 errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {

    e.preventDefault();

    if (contactName.value === ''|| contactEmail.value === ''|| contactSubject.value === ''|| contactMessage.value ===''){
        errorMessage.textContent='Write all the input'
    }

    else{ 
        emailjs.sendForm('service_6mperxt','template_qdzmjpl','#contact-form','bqlUdxCcLoDgwYXs7')
        .then(() => {
            errorMessage.classList.add('color-first');
            errorMessage.textContent='Message Sent';

            setTimeout(()=>{
                errorMessage.textContent='';
            },5000);
        },
        (error)=>{
            alert('OOPS! Something went wrong',error)
        }
        );

        contactName.value='';
        contactEmail.value='';
        contactMessage.value='';
        contactSubject.value='';
        contactForm.value='';
    }
};

contactForm.addEventListener('submit', sendEmail);