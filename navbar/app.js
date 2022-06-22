const navToggle = document.querySelector('.nav_toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  links.classList.toggle('show_links')
})
