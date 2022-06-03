const colours = [
  'red',
  'hsl(28, 42%, 94%)',
  'rgb(255, 255, 0)',
  '#7cfc00',
  'blue',
  'hsl(275, 100%, 25%)',
  'rgb(238, 130, 238)'
]
const button = document.getElementById('btn')
const colour = document.querySelector('.colour')

/***EVENT LISTENERES***/
button.addEventListener('click', function () {
  //console.log(document.body)
  //get random number between 0 and 6
  //const randomNumber = 4
  const randomNumber = getRandomNumber()
  console.log(randomNumber)
  document.body.style.backgroundColor = colours[randomNumber]
  colour.textContent = colours[randomNumber]
})
function getRandomNumber () {
  return Math.floor(Math.random() * colours.length)
}
