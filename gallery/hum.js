const hamburger = document.querySelector('.hamburger');
const closeMenu = document.getElementById('close-menu')
      const nav = document.querySelector('nav');
      hamburger.addEventListener('click', () => {
         nav.classList.toggle('show');
         hamburger.classList.toggle('active');
      });
      closeMenu.addEventListener('click',()=>{
        navMenu.classList.remove('active')
      })

function scrollRowLeft(rowId) {
  document.getElementById(rowId).scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}
function scrollRight(rowId) {
  document.getElementById(rowId).scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}

