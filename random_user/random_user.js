import get from './utils/getElement.js'
const url = 'https://randomuser.me/api'

const img = get('.user_image')
//console.log(img)
const title = get('.user_title')
const value = get('.user_value')
const btn = get('.btn')
const btns = [...document.querySelectorAll('.icon')]
//console.log(btns)

const getUser = async () => {
  const response = await fetch(url)
  const data = await response.json()
  //console.log(data)

  //destructure user data
  const person = data.results[0]
  console.log(person)
  //const { phone } = data.results[0]
  //console.log(phone)
  const { phone, email } = person
  //console.log(phone, email)
  const { large: image } = person.picture
  //console.log(image)
  const { password } = person.login
  const { title, first, last } = person.name
  const {
    dob: { age }
  } = person
  const {
    street: { number, name }
  } = person.location
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${title} ${first} ${last}`
  }
}

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
