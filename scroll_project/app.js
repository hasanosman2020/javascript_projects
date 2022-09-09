/*Set date for footer*/
const date = document.querySelector('.date')
date.innerHTML = new Date().getFullYear()

/*Toggle visibility of links*/
const navToggle = document.querySelector('.nav_toggle')
const linksContainer = document.querySelector('.links_container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  linksContainer.classList.toggle('show_links')
})
