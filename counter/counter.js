//set initial count
let count = 0

//select value and buttons
const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')
console.log(buttons)
//the console.log(buttons) here should show us a node list containing the 3 buttons

//loop over buttons using forEach() method
buttons.forEach(function (button) {
  //console.log(button)
  //the console.log(button) should show us that each button has been looped through once
  button.addEventListener('click', function (e) {
    console.log(e.currentTarget.classList)
    const counterMove = e.currentTarget.classList
    if (counterMove.contains('increase')) {
      count++
    } else if (counterMove.contains('decrease')) {
      count--
    } else {
      count = 0
    }
    value.textContent = count
    if (count > 0) {
      value.style.color = 'green'
    } else if (count < 0) {
      value.style.color = 'red'
    } else {
      value.style.color = 'black'
    }
  })
})
