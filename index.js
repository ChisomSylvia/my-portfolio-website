let nav = document.getElementById('nav');


window.onscroll = function() {
  if (window.scrollY > 0) {
    nav.style.background = 'rgb(0, 255, 255, 0.1)';
    nav.style.backdropFilter = 'blur(50px)';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.backdropFilter = 'none';
  }
}