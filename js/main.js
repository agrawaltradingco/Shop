/*==========================================
    AGRAWAL TRADING CO.
    MAIN JAVASCRIPT
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeMobileMenu();

    initializeScrollReveal();

    initializeStickyHeader();

    initializeActiveNavigation();

});


/*==========================================
    MOBILE MENU
==========================================*/

function initializeMobileMenu(){

    const menuButton = document.querySelector(".mobile-menu");

    const navbar = document.querySelector(".navbar");

    if(!menuButton || !navbar) return;

    menuButton.addEventListener("click",()=>{

        navbar.classList.toggle("active");

        menuButton.classList.toggle("active");

    });

}


/*==========================================
    STICKY HEADER
==========================================*/

function initializeStickyHeader(){

    const header = document.querySelector(".header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 40){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    });

}


/*==========================================
    SCROLL REVEAL
==========================================*/

function initializeScrollReveal(){

    const elements = document.querySelectorAll(

        ".fade-up,.card,.category-card,.faq-preview-card,.about-feature-card,.contact-info-card"

    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(element=>{

        element.classList.add("fade-up");

        observer.observe(element);

    });

}


/*==========================================
    ACTIVE NAVIGATION
==========================================*/

function initializeActiveNavigation(){

    const currentPage = location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link=>{

        const href = link.getAttribute("href");

        if(href === currentPage){

            link.classList.add("active");

        }

    });

}

const contactForm = document.querySelector(".contact-form");

const name = document.getElementById("js-contact-form-name");
const number = document.getElementById("js-contact-form-number");
const email = document.getElementById("js-contact-form-email");
const subject = document.getElementById("js-contact-form-subject");
const message = document.getElementById("js-contact-form-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const details = [];

  if (name.value.trim()) {
    details.push(`👤 Name: ${name.value.trim()}`);
  }

  if (number.value.trim()) {
    details.push(`📞 Phone: ${number.value.trim()}`);
  }

  if (email.value.trim()) {
    details.push(`📧 Email: ${email.value.trim()}`);
  }

  if (subject.value.trim()) {
    details.push(`📌 Subject: ${subject.value.trim()}`);
  }

  if (message.value.trim()) {
    details.push(`💬 Message:\n${message.value.trim()}`);
  }

  // Prevent sending an empty message
  if (details.length === 0) {
    alert("Please fill in at least one field before submitting.");
    return;
  }

  const whatsappMessage = `*New Inquiry*\n\n${details.join("\n\n")}`;

  // Replace with your WhatsApp number (country code + number, no + or spaces)
  const whatsappUrl = `https://wa.me/919819796036?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, "_blank");
  

  // Optional: Reset the form after opening WhatsApp
  contactForm.reset();
});