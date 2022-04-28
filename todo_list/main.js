/*Select  Items*/
const alert = document.querySelector('.alert')
const form = document.querySelector('.todo_form')
const addButton = document.querySelector('.add_todo_btn')
const container = document.querySelector('.todolist_ocntainer')
const list = document.querySelector('todo_list')
const todo = document.querySelector('todo_item')
const clearButton = document.querySelector('.clear_todos_btn')

/*Edit options*/
let editElement
//we will not start editing immediately and only after we click on the edit button which will make the editFlag = true so the default for editFlag is false
let editFlag = false
//we use the id of an element to identify it
let editID = ''
