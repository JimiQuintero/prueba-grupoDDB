//ScrollReveal
window.sr = ScrollReveal();

sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom'
});

sr.reveal('.our-process', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});

sr.reveal('.our-process-left', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});

sr.reveal('.our-process-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});

sr.reveal('.pricing-revel', {
  duration: 2000,
  origin: 'left',
  distance: '400px'
});

sr.reveal('.pricing-slot', {
  duration: 2000,
  origin: 'top',
  distance: '400px'
});



// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });