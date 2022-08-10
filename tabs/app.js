const tabInfoContainer = document.querySelector('.about')
const buttons = document.querySelectorAll('.btn_tab')
const articles = document.querySelectorAll('.content')

//Add event listener to parent container re bubbling
tabInfoContainer.addEventListener('click', function (e) {
  //console.log(e.target.dataset.id)
  const id = e.target.dataset.id
  if (id) {
    buttons.forEach(function (button) {
      button.classList.remove('active')
    })
    e.target.classList.add('active')
    //hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
  }
})
