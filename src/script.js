// script.js
export function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
  
    // Function to handle the scroll event
    window.onscroll = function() {
      let scrollPosition = window.scrollY;
      
      // Toggle 'scrolled' class based on scroll position
      if (scrollPosition > window.innerHeight * 0.9) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
  }
  