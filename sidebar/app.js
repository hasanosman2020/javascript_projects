const sidebarToggle = document.querySelector('.sidebar_toggle')
const sidebar = document.querySelector('.sidebar')
const sidebarClose = document.querySelector('.close_btn')

sidebarToggle.addEventListener('click', function () {
  console.log(sidebar.classList)
  //if (sidebar.classList.contains('show_sidebar')) {
  //sidebar.classList.remove('show_sidebar')
  //} else {
  //sidebar.classList.add('show_sidebar')
  //
  sidebar.classList.toggle('show_sidebar')
})

sidebarClose.addEventListener('click', function () {
  sidebar.classList.remove('show_sidebar')
})
