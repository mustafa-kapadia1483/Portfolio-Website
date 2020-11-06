document.querySelector('.hamburger-btn').addEventListener('click', showNav);

function showNav() {
  document.querySelector('.nav-links').classList.toggle('show-links');
  document.querySelector('.hamburger-btn').classList.toggle('animate');
  }