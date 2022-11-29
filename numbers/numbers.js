const numbers = [...document.querySelectorAll('.number')]
console.log(numbers)

const updateCount = el => {
  console.log(el)
}

numbers.forEach(number => {
  //console.log(number)
  updateCount(number)
})
