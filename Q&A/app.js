//Traversing the DOM

const buttons = document.querySelectorAll('.question_btn')

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    //console.log(e.currentTarget);
    //console.log(e.currentTarget.parentElement);
    //console.log(e.currentTarget.parentElement.parentElement)

    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show_text')
  })
})
