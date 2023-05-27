const url = 'https://randomuser.me/api'

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

export default getUser
