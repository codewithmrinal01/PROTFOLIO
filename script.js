
/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const TypedHome = new Typed("#home-typed", {
   strings: ["Web Developer", "UI/UX Designer", "Freelancer"],
   typeSpeed: 90,
   backSpeed: 120,
   backDelay: 2000,
   loop: true,
   cursorChar: '_',

})

// Contact Email Js==============================
const contactForm = document.getElementById('contact-form'),
   contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()
   emailjs.sendForm('service_bwvcq4y', 'template_274i7xp', '#contact-form', 'hm_9HEXl3OngYpJ7y')
      .then(() => {
         contactMessage.textContent = 'Message sent succssfully ✅️ '

         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)

         contactForm.reset()
      }, () => {
         contactMessage.textContent = 'Message not sent (service error) ❌'
      })
}
contactForm.addEventListener('submit', sendEmail)


// scroolup

const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





// Section====

function showContent(number) {

    // Hide all contents
    document.querySelectorAll('.responsive__content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });

    // Show selected content
    document.getElementById('content' + number).classList.add('active');

    // Activate selected button
    document.querySelectorAll('.tab-btn')[number - 1].classList.add('active');
}
