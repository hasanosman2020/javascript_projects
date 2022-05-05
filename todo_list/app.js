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

//The second event listener which will be for deleting all items in the list, i.e. clearing the list, and so thed event will be the click action on the 'Clear To-Dos' button
clearButton.addEventListener('click', clearList)

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
  //the if, elseif and else conditions below all need to be dealt with by way of functions or otherwise in order to determine what happens and how the app will react on each event - start with the final else, then the if and lastly the elseif
  //we can shorten the below if condition like so: if(todoValue && !editFlag)
  if (todoValue !== '' && editFlag === false) {
    //console.log('add item to list');
    //here we need to create the to-do item which appears in the to-do list and which is the value entered by the user i.e. the todoValue
    //in index.html we see that the location for this item is within the article tag along with the edit and delete buttons - in index.html we have the todo_list followed by the todo_item. This is the item we want to create but since it is within article what we create here is the article (so that there is a reference back to the html element) and we copy and paste the html code(and we remove that html code from index.html)
    //create the element
    const article = document.createElement('article')

    //all html elements within the article tag have a class of 'todo_item' so create such class in the js 'article' handle created above
    article.classList.add('todo_item')

    //we need to also assign a unique ID to each 'todo_item'. If the index.html had a data-set value we can use that to access the element but here we can first create the data-set attribute and create the attribute dynamically by labelling the attribute 'data-id'.
    //add id
    const idAttribute = document.createAttribute('data-id')

    //add the value of the attribute
    idAttribute.value = todoId

    //add the attribute('idAttribute') to the element 'article'
    article.setAttributeNode(idAttribute)

    //now we can add the html and set it equal to a template string. Note here ;that we have already set up the article so we need to copy the html code within the article element and change any hard-coded values/items in the html code being dynamic - delete the article element from index.html because everything will now be added dynamically
    article.innerHTML = `
    <p class="title">${todoValue}</p>
            <div class="btn_container">
              <button type="button" class="edit_btn">
                <img src="edit_todo.svg" alt="edit item" />
              </button>
              <button type="button" class="delete_btn">
                <img src="delete_todo.svg" alt="delete item" />
              </button>
            </div>
    `

    //having set up the item, we now need to add the item to our list - we append the item to the list ('list' handle created above from the 'todo_list' html element)
    list.appendChild(article)

    //display alert
    displayAlert('To-Do successfully added to list!', 'success')

    //show the todolist container
    //container.classList.add('show_container')
    //NOTE: including the hidden container and .show_container results in a bug

    //add two more functions and initially add them as placeholders
    //add to local storage
    addToLocalStorage(todoId, todoValue)

    //set back to default
    setBackToDefault()
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
//we have finished dealing with the scenario where the user adds a blank todo to the list - now we turn to when the user wants to add a new item to his to-do list (see), i.e where the if condition 'value !== '' && editFlag =false

//clear the todo list and remove all items. This function needds to asccess all the itmes in the list individually so we need to fihd the class to which all the items belong to, i.e. the class list. This is normally to be found in the index.html but since we have copied that part of the html into app.js this means that the class list is now added dynamically and it is the class list added above as 'todo_item' (fromthe line 'article.classList.add('todo_item')')
function clearList () {
  //console.log('list is clear')
  const items = document.querySelectorAll('.todo_item')
  //in order to access all of the items we have to iterate through the list of items and delete each item. We do this by using a forEach loop
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item)
    })
    displayAlert('Success - you have no pending to-dos!', 'success')
  }
}

//set back to default
function setBackToDefault () {
  //console.log('set back to default')
  //the aim here is to have the user input be blank after submitting a todo rather than have it stay in the box, so we would want to say:
  todo.value = ''
}

/*Local Storage*/
function addToLocalStorage (todoId, todoValue) {
  console.log('added to local storage')
}
