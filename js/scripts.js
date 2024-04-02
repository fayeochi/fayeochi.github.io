/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 
//when modal opens


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



    

});

// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

// window.addEventListener('scroll', function() {
//     const elements = document.querySelectorAll('.container');
//     const window_height = window.innerHeight;
  
//     elements.forEach(element => {
//       const distance_from_top = element.getBoundingClientRect().top;
  
//       if (distance_from_top - window_height <= 0) {
//         element.classList.add('visible');
//       }
//     });
//   });


  function checkVisibility() {
    const elements = document.querySelectorAll('.container');
    const window_height = window.innerHeight;
  
    elements.forEach(element => {
      const distance_from_top = element.getBoundingClientRect().top;
  
      if (distance_from_top - window_height <= 0) {
        element.classList.add('visible');
      }
    });
  }
  
  // Check visibility on page load
  checkVisibility();
  
  // Check visibility on scroll
  window.addEventListener('scroll', checkVisibility);


  $('#exampleModal').on('shown.bs.modal', function () {
    $('.fade-in').addClass('visible');
  })



$('#exampleModal4').on('shown.bs.modal', function () {
    $('.fade-in').addClass('visible');
    const modalBody = document.querySelector('#exampleModal4 .container');
    const image = document.getElementById('casaimage');
    const container = document.getElementById('casaimagecon');
  
    modalBody.addEventListener('scroll', function() {
      const scrollTop = modalBody.scrollTop;
      const containerBottom = container.getBoundingClientRect().bottom - modalBody.getBoundingClientRect().top;
  
      if (containerBottom >= 0) {
        const scale = Math.min(1 + scrollTop / 3000, 2); // Limit scale to 2
        image.style.transform = 'scale(' + scale + ')';

        }
    });
});


