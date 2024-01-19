/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*=============== MENU VISIBLE ===============*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*===============  MENU HIDDEN  ===============*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER ===============*/

let swiper = new Swiper(".projects__container", {

    //modules: [Navigation, Pagination],
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
    },
  });


/*=============== SWIPER BULLETIN ===============*/

let swiperBulletin = new Swiper(".bulletin__container", {
    loop: true,
    grabCursor: true,

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

/*=============== ELAPSED TIME ==============*/
const start = new Date('2022-10-02T09:00:00');
const elapsedTimeDisplay = document.querySelector('#elapsed-time')
function countElapsedTime() {
  const now = new Date();
  const elapsedTime = now - start;
  
  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);

  elapsedTimeDisplay.textContent = (`${elapsedDays}d ${elapsedHours % 24}h ${elapsedMinutes % 60}m ${elapsedSeconds % 60}s`);
}

setInterval(countElapsedTime, 1000); // update time every second


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactLabel = document.getElementById('contact-label'),
      contactEmail = document.getElementById('contact-mail'),
      contactMessage = document.getElementById('contact-message'),
      contactErrorMessage = document.getElementById('contact-errorMessage')

const sendEmail = (e) =>{
  e.preventDefault()
    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){
      contactErrorMessage.classList.remove('color-blue')
      contactErrorMessage.classList.add('color-red')
      //error message
      contactErrorMessage.textContent = 'Name, mail and message required for a proper love message..'
    }
    else{
      //serviceID - templateID - #form - publicKey
      emailjs.sendForm('service_yiadbyk','template_r8uwu09','#contact-form', 'fIl5O1UQA5oM3TRcE')
      .then(() =>{
        contactErrorMessage.classList.add('color-blue')
        contactErrorMessage.textContent = 'Message sent successfully! Waiting for approval.. 👀'
        //removes message after 5 sec
        setTimeout(() =>{
          contactErrorMessage.textContent = ''
        }, 5000)
      }, (error) =>{
        alert('Love is a tricky thing.. 💔', error)
      })
      
      contactName.value = ''
      contactEmail.value = ''
      contactMessage.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
  
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    sectionClass.classList.add('active-link')
  } else {
    sectionClass.classList.remove('active-link')
  }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
   : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
  : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
window.onload = function () { 
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true
    });

sr.reveal(`.home__data, .projects__container, .bulletin__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.skills__content:nth-child(3), .contact__content:nth-child(3)`, {origin: 'under'})
sr.reveal(`.qualification__content`, { interval: 100 })}