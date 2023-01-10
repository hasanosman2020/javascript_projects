const url = 'https://icanhazdadjoke.com/'

const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

//console.log(btn, result)
//btn.addEventListener('click', () => {
//console.log('hello')
//})

btn.addEventListener('click', () => {
  fetchDadJoke()
})

const fetchDadJoke = async () => {
  result.textContent = 'Loading...'
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app'
      }
    })
    //console.log(response)
    if (!response.ok) {
      throw new Error('error...')
    }
    const data = await response.json()
    //console.log(data)
    result.textContent = data.joke
  } catch (error) {
    result.textContent =
      'The application has encountered an error. Please try again.'
  }
}

fetchDadJoke()
