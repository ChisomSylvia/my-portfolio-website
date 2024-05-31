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


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));
