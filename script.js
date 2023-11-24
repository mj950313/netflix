const navigation = document.getElementById('nav');

window.addEventListener('scroll',() => { 
  if(window.scrollY >=100) {
    nav.classList.add('navigation__black');
  } else {
    nav.classList.remove('navigation__black');
  }
})