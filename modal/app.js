//Select modsl_btn, modal_overlay, close_btn
//Listen for click events on modal_btn and close_btn
//When user clicks modal_btn, add .open_modal to modal_overlay
//When user clicks close_btn remove .open_modal from modal_overlay

const modalBtn = document.querySelector('.modal_btn')
const modalContainer = document.querySelector('.modal_container')
const modal_overlay = document.querySelector('.modal_overlay')
const modalClose = document.querySelector('.close_btn')

modalBtn.addEventListener('click', function () {
  modal_overlay.classList.add('open_modal')
})
modalClose.addEventListener('click', function () {
  modal_overlay.classList.remove('open_modal')
})
