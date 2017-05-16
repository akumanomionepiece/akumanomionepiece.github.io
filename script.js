window.sr = ScrollReveal();

sr.reveal('.txt', {
  duration: 2000,
  origin:'right',
  viewFactor:0.2
});

sr.reveal('.tel', {
  duration: 2000,
  delay: 2000,
  origin:'right',
});

sr.reveal('.triangle', {
  duration: 2000,
  origin:'right',
  viewFactor:0.2
});

sr.reveal('.select', {
  duration: 2000,
  origin:'right',
  distance: '100px',
  viewFactor:0.2
});

sr.reveal('.select2', {
  duration: 2000,
  delay: 1500,
  origin:'center',
  distance: '100px',
  viewFactor:0.2
});

sr.reveal('.select3', {
  duration: 2000,
  delay: 2500,
  origin:'left',
  distance: '100px',
  viewFactor:0.2
});


$(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
