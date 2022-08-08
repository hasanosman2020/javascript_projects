const tabInfoContainer = document.querySelector('.about')
const buttons = document.querySelector('.btn_tab')
const info = document.querySelector('content')

//Add event listener to parent container re bubbling
tabInfoContainer.addEventListener('click', function (e) {
  //console.log(e.target.dataset.id)
  const id = e.target.dataset.id
  if (id) {
    buttons.forEach(function (button) {
      button.classList.remove('active')
      e.target.classList.add('active')
    })
  }
})
