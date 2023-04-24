const switchElement = document.querySelector('.switch')

window.addEventListener('scroll', () => {
  window.pageYOffset > 38
  ? switchElement.classList.add('scroll')
  : switchElement.classList.remove('scroll')
})