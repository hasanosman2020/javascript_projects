const questions = document.querySelectorAll('.question')
console.log(questions)

questions.forEach(function (question) {
  //console.log(question)
  const button = question.querySelector('.question_btn')
  //console.log(button)
  button.addEventListener('click', function () {
    questions.forEach(function (item) {
      //console.log(item)
      if (item !== question) {
        item.classList.remove('show_text')
      }
    })
    question.classList.toggle('show_text')
  })
})
