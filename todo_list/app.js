/*Select  Items*/
const alert = document.querySelector('.alert')
const form = document.querySelector('.todo_form')
const addButton = document.querySelector('.add_todo_btn')
const container = document.querySelector('.todolist_ccntainer')
const list = document.querySelector('.todo_list')
const todo = document.getElementById('todo')
const clearButton = document.querySelector('.clear_todos_btn')

/*Edit options*/
let editElement
//we will not start editing immediately and only after we click on the edit button which will make the editFlag = true so the default for editFlag is false
let editFlag = false
//we use the id of an element to identify it
let editID = ''

/*Event Listeners*/
//add todo which happens after user clicks 'Add To-Do' button. We use a shortcut here with the callback function where we write the name of the function and then add that function in the 'Functions' section below instead of referring to the callback function with 'function(e){}'
form.addEventListener('submit', addItem)

//Now we refer to the 'Functions' section and look at the first function 'addItem(e)'

/*Functions*/
//this is the first callback function after the add todo event above and we need to include the event object because bt default when we submit a form the form will try to submit the data entered by the user to a server and we do no want this to happen so we set up the event with preventDefault().
function addItem (e) {
  e.preventDefault()
  //after preventing the default behaviour of the form being submitted to a server we would want to access the value of the user data. That user data/input is the todovariable created above from the html input element, i.e. the user input, which is identified by its id of 'todo'. We access the value of that variable (or of the user input) by using the value property, variable.value - inthis case, todo.value. We can do console.log to check that what we type in will appear in the console.
  console.log(todo.value)

  //so we assign the todo.value to a variable so we can always have access to the user input
  const todoValue = todo.value

  //we also need to assign each of the user data a specific id and we do that by assiging each user input an id of time in milliseconds which it was added by the user and we convert that to a string because later when we access this id it will come back as a string so we might as well set it up as a string
  const todoId = new Date().getTime().toString()

  //to check each user input has a different nummber as id we do console.log(todoId) and press 'Add Tp-Do' a number of times
  console.log(todoId)

  //the user can do one of three things before clicking on 'Add To-Do' button: 1. enter a value and add it to todo list, 2. edit an exisiting todo item, 3. click on 'Add tO-Do' without entering anything. Adding a new item to the list means that the todoValue variable is not empty and the editFlag is false
  //the console.logs in the if..elseif..else statement below is to check that the logic is working. We are unable to check if the 'edit item' work because we first need to make the edit button functional
  //we can shorten the below if condition like so: if(todoValue && !editFlag)
  if (todoValue !== '' && editFlag === false) {
    console.log('add item to list')
    //if the user is editing an item then it means that the todoValue variable is not empty but the editFlag is true
    //we can shorten the below elseif condition like so: else if (todoValue && !editFlag)
  } else if (todoValue !== '' && editFlag === true) {
    console.log('edit item')
  } else {
    //console.log('empty item')
    // OR
    //alert.textContent = 'Please enter a to-do.'
    //alert.classList.add('alert-error')
    //OR
    //instead of hard-coding the alert value we can set up a function to display the alert and which we would be able to use elsewhere in the program so see the displayAlert() function below
    //after having set the displayAlert() function we can now use it in here for when the user attempts to click on the 'Add To-Do' button without having entered a to-do
    displayAlert('Please enter a to-do.', 'error')
  }
}

//display alert
//the displayAlert() function will have two arguments, the text parameter which is the text that we want to appear as an alert to the user, and the action parameter which is simply whether the alert is under the class of 'alert-error' or 'alert-success', i.e. whether the alert should be in green or in red.
//for the block code below, we can copy the two alerts above and tweaking them slightly as shown
function displayAlert (text, action) {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

  //we want the alert to be displayed for only a short period of time and the way we achieve this is by using the setTimeout() function. The setTimeout() function has two parameters, the function of what we want to see happen and the duration so we start this by commenting that we are removing the alert
  //remove alert
  setTimeout(function () {
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
  }, 5000)
}
