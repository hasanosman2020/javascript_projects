const questions = document.querySelectorAll('.question')
console.log(questions)

questions.forEach(function (question) {
  //console.log(question)
  const buttons = question.querySelectorAll('.question_btn')
  //console.log(buttons)
  buttons.forEach(function (button) {
    if (button.innerText !== '.question_content') {
      question.remove.classList('show_text')
    }
  })
  button.addEventListener('click', function () {
    question.classList.toggle('show_text')
  })
})
