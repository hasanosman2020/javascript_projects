import get from './getElement.js'
import removeActive from './removeActive.js'
//import getUser from './utils/fetchUser.js'

const img = get('.user_image')
//console.log(img)
const title = get('.user_title')
const value = get('.user_value')
const btn = get('.btn')
const btns = [...document.querySelectorAll('.icon')]

const displayUser = person => {
  img.src = person.image
  value.textContent = person.name
  title.textContent = `My name is `
  btns.forEach(btn => btn.classList.remove('active'))

  removeActive(btns)
  btns[0].classList.add('active')
  btns.forEach(btn => {
    //console.log(btn)
    const label = btn.dataset.label
    btn.addEventListener('click', () => {
      //console.log(person[label])
      title.textContent = `My ${label} is`
      value.textContent = person[label]
      removeActive(btns)
      btns.forEach(btn => btn.classList.remove('active'))
      btn.classList.add('active')
    })
  })
}

export default displayUser
