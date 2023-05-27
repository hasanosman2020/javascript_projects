import get from './utils/getElement.js'
import getUser from './utils/fetchUser.js'

const img = get('.user_image')
//console.log(img)
const title = get('.user_title')
const value = get('.user_value')
const btn = get('.btn')
const btns = [...document.querySelectorAll('.icon')]
//console.log(btns)

/*const showUser = () => {
  getUser().then(data => console.log(data))
  /*or alternatively we can use the syntax:*/
const showUser = async () => {
  const person = await getUser()
  console.log(person)
}
//console.log('Hello World')

//get user from API (getUser() function above)
//display user info (displayUser() function above)

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
