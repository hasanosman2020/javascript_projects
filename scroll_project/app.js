/*Set date for footer*/
const date = document.querySelector('.date')
date.innerHTML = new Date().getFullYear()

/*Toggle visibility of links*/
const navToggle = document.querySelector('.nav_toggle')
const linksContainer = document.querySelector('.links_container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  //linksContainer.classList.toggle('show_links')
  const containerHeight = linksContainer.getBoundingClientRect().height
  //console.log(containerHeight)
  const linksHeight = links.getBoundingClientRect().height
  //console.log(linksHeight)
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})

const navbar = document.getElementById('nav')
const backToTop = document.querySelector('.top_link')

/*fixed navbar and scroll-to-top button*/
window.addEventListener('scroll', function () {
  console.log(window.pageYOffset)
  const scrollHeight = window.pageYOffset
  const navbarHeight = navbar.getBoundingClientRect().height
  if (scrollHeight > navbarHeight) {
    navbar.classList.add('fixed_navbar')
  } else {
    navbar.classList.remove('fixed_navbar')
  }

  if (scrollHeight > 500) {
    backToTop.classList.add('show_link')
  } else {
    backToTop.classList.remove('show_link')
  }
})

const scrollLinks = document.querySelectorAll('.scroll_link')
scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    //navigate to a specific spot
    const id = e.currentTarget.getAttribute('href').slice(1)
    //console.log(id)
    const element = document.getElementById(id)
    //calculate the heights
    const navbarHeight = navbar.getBoundingClientRect().height
    const linksContainerHeight = linksContainer.getBoundingClientRect().height
    const fixedNavbar = navbar.classList.contains('fixed_navbar')
    let position = element.offsetTop - navbarHeight
    //console.log(position)

    if (!fixedNavbar) {
      position = position - navbarHeight
    }
    //if (navbarHeight > 82) {
    //position = position + linksContainerHeight //if the navbar is not fixed, the links container is not visible, so we need to add the height of the links container to the position
    //}

    //console.log(position)
    window.scrollTo({
      left: 0,
      top: position
    })
    linksContainer.style.height = 0
  })
})
