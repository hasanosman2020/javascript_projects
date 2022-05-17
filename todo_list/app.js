/******SELECT ITEMS********/

const alert = document.querySelector('.alert')
const form = document.querySelector('.todo_form')
const addButton = document.querySelector('.add_todo_btn')
const container = document.querySelector('.todolist_container')
const list = document.querySelector('.todo_list')
const todo = document.getElementById('todo')
const clearButton = document.querySelector('.clear_todos_btn')

/*Edit options*/
let editElement
//we will not start editing immediately and only after we click on the edit button which will make the editFlag = true so the default for editFlag is false
let editFlag = false
//we use the id of an element to identify it
let editID = ''

/*******EVENT LISTENERS*********/

//add todo which happens after user clicks 'Add To-Do' button. We use a shortcut here with the callback function where we write the name of the function and then add that function in the 'Functions' section below instead of referring to the callback function with 'function(e){}'
form.addEventListener('submit', addItem)

//Now we refer to the 'Functions' section and look at the first function 'addItem(e)'

//The second event listener which will be for deleting all items in the list, i.e. clearing the list, and so thed event will be the click action on the 'Clear To-Dos' button
clearButton.addEventListener('click', clearList)

//The edit and delete buttons also need event listeners so that they either delete the item or edit it when the user clicks on either of them. Like the list items which had the class list added dynamically, the edit and select buttons are also added dynamically and so if we try to add event listeners to either button then nothing will happen. The reason for that is because we will not have access to them since they are not there when the page loads. The clear button, for example, was also added dynamically but we always have access to it because it is there in the html when the page loads and we can therefore target it, but neither the edit or delete buttons are present and we are therefore unable to target them. The edit and select buttons are created dynamically below and it is only then that we are able to target them. To continue from here, go below where we create the article (where we copy the html code. (The code below was my initial attempt - try it and see how it fails. First we look at the html code copied from index.html to app.js and create a javascript handle from the class of each of the delete and select buttons by using the querySelector method. Then we add an event listener to that handle/variable and then write the commands for each function).

//const deleteButton = article.querySelector('.delete_btn')
//deleteButton.addEventListener('click', deleteTodoItem)

//const deleteButton = document.querySelectorAll('.delete_btn')
//deleteButton.addEventListener('click', deleteTodoItem)

//set up listener for DOMContentLoaded - event DOM content
window.addEventListener('DOMContentLoaded', setupItems)

/******FUNCTIONS********/

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
    createListItems(todoId, todoValue)

    //console.log('add item to list');
    //here we need to create the to-do item which appears in the to-do list and which is the value entered by the user i.e. the todoValue
    //in index.html we see that the location for this item is within the article tag along with the edit and delete buttons - in index.html we have the todo_list followed by the todo_item. This is the item we want to create but since it is within article what we create here is the article (so that there is a reference back to the html element) and we copy and paste the html code(and we remove that html code from index.html)
    //create the element -
    //[Note: code moved to createListItems() function below] const article = document.createElement('article')

    //all html elements within the article tag have a class of 'todo_item' so create such class in the js 'article' handle created above
    //[Note: code moved to createListItems() function below] article.classList.add('todo_item')

    //we need to also assign a unique ID to each 'todo_item'. If the index.html had a data-set value we can use that to access the element but here we can first create the data-set attribute and create the attribute dynamically by labelling the attribute 'data-id'.
    //add id
    //[Note: code moved to createListItems() function below] const idAttribute = document.createAttribute('data-id')

    //add the value of the attribute
    //[Note: code moved to createListItems() function below] idAttribute.value = todoId

    //add the attribute('idAttribute') to the element 'article'
    //[Note: code moved to createListItems() function below] article.setAttributeNode(idAttribute)

    //now we can add the html and set it equal to a template string. Note here ;that we have already set up the article so we need to copy the html code within the article element and change any hard-coded values/items in the html code being dynamic - delete the article element from index.html because everything will now be added dynamically

    /*[Note: code moved to createListItems() function below]
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
    `*/
    //Continued from above. The edit and delete buttons are children of the article and only appear when the article does so. Here is where we are able to access them and to create a javascript handle on either burron (we test this code by doing a console.log in the callback function)
    /*[Note: code moved to createListItems() function below]
    const deleteButton = article.querySelector('.delete_btn')
    deleteButton.addEventListener('click', deleteTodoItem)*/
    //now go to function 'deleteTodoItem'

    /*[Note: code moved to createListItems() function below]
    const editButton = article.querySelector('.edit_btn')
    editButton.addEventListener('click', editTodoItem)*/

    //having set up the item, we now need to add the item to our list - we append the item to the list ('list' hand                        dle created above from the 'todo_list' html element)
    /*[Note: code moved to createListItems() function below]list.appendChild(article)*/

    //display alert
    displayAlert('To-Do successfully added to list!', 'success')

    //show the todolist container
    container.classList.add('show_container')

    //NOTE: including the hidden container and .show_container results in a bug

    //add two more functions and initially add them as placeholders
    //add to local storage
    addToLocalStorage(todoId, todoValue)

    //set back to default
    setBackToDefault()

    //console.log('empty item')
    // OR
    //alert.textContent = 'Please enter a to-do.'
    //alert.classList.add('alert-error')
    //OR
    //instead of hard-coding the alert value we can set up a function to display the alert and which we would be able to use elsewhere in the program so see the displayAlert() function below
    //after having set the displayAlert() function we can now use it in here for when the user attempts to click on the 'Add To-Do' button without having entered a to-do
    //displayAlert('Please enter a to-do.', 'error')
  } else if (todoValue !== '' && editFlag === true) {
    console.log('edit item')
    editElement.innerHTML = todoValue
    displayAlert('Success- the todo item has been edited.', 'success')

    //edit local storage - this must appear before setBackToDefault() function
    editLocalStorage(editID, todoValue)

    //see setBackToDefault() function below - this must be the last function in this code block
    setBackToDefault()
  } else {
    displayAlert('To-do item cannot be blank', 'error')
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
  container.classList.remove('show_container')

  setBackToDefault()
  localStorage.removeItem('list')
  setTimeout(function () {
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
  }, 5000)
}

//set back to default
function setBackToDefault () {
  //console.log('set back to default')
  //the aim here is to have the user input be blank after subm;;itting a todo rather than have it stay in the box, so we would want to say:
  todo.value = ''
  //the additional elements below will kick into action when wer click on the edit button
  editFlag = false
  editID = ''
  addButton.textContent = 'Add To-Do'
}

function deleteTodoItem (e) {
  console.log('Item to be deleted')
  //when the user clicks on the delete button we want to have access to the item which is in the todo list. For this we need access to the parent container and we pass as a parameter an event object. The parent container of the button element is the button container but when we click on the button we do not want access to the button container but rather we want access to the todo item on the list. We have already referenced above the todo list and we can use removeChild method to delete the item. Also, we use currentTarget here because this is already set up on the button. For example, if we mistakenly use font awesome then the parent will be the button, and if we use target instead of currentTarget then we will see what we are clicking on but here the path is very specific with the parent element being the button container and the parent of that being the todo_list.
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  list.removeChild(element)
  if (list.children.length === 0) {
    container.classList.remove('show_container')
  }
  displayAlert('Item removed', 'error')
  setBackToDefault()

  //remove from local storage
  removeFromLocalStorage(id)
}

function editTodoItem (e) {
  //console.log('Item to be edited.')
  //two phases when editing items - making it functional and handling it when we are submitting the form (b/cf initially we check whether we are submitting the form or editing). We start like we did with deleteItem above and first thing we do is to access the todo item so copy the definition of element.
  const element = e.currentTarget.parentElement.parentElement

  //Then we set up the edit items that we createad under the comment 'edit options' above. For editElement, the current target will give me the button, the pa;rent element will give me the button container and sibling will give me the specific <p class='title'></p> copied over from the html - it is that specific value which we want to access because that will reflect what the user entry is and it is what we want to edit, so we use 'previousElementSibling'
  editElement = e.currentTarget.parentElement.previousElementSibling

  //once we have accessw to that value/title, we can set up what its value is and it will be the value of the data being inserted by the user - so instead of grabbing that value from somewhere like usual or setting it equal to an empty string we are here setting that value by using 'editElement.innerHTML'
  //set form value
  todo.value = editElement.innerHTML

  //since we are now editing, editFlag must now equal true
  editFlag = true

  //the editId will be equal to the id of the element and we access that using the data-id (dataset.id) - this data id is each element's unique value
  editID = element.dataset.id

  //we would also want to change the value of the button from 'Add To-Do' to 'Edit To-Do'
  addButton.textContent = 'Edit To-Do'

  //now we need to deal with our edit functionality and submitting the edited item, i.e. the elseif above where the value is true and the editFlag is true. The first thing to do is to grab the value and assign it to the editElement. The 'editElement = 'e.currentTarget.parentElement.previousElementSibling' is assigned to a specific paragraph and the value was assigned to the innerHTML of editElement, so we grabbed whatever we had in that paragraph and assigned it to the form. Now we want to do the opposite and grab that value and set it back equal to the paragraph. Since that was assigned to the editElement (under comment edit options at the top), when we are actually submitting the form we say that the editElement's inner html is now equal to the value and we do that by going back up to the elseif statement and inserting 'editElement.innerHTML = value'
}

/******LOCAL STORAGE********/

//refer to mvlocalstorage.js for explanation of how local storage operates
//the general set up is setItem, getItem, JSON.stringify(), and JSON.parse()
//first we check whenm we are running our local storage and we see above that it is when the value is there and we are not editing - the todoId is what was passed to the item and the value is the uswer input, i.e. whatever is displayed on the screen.
function addToLocalStorage (id, value) {
  //console.log('added to local storage')
  //The local storage will store an array with items and it will be equal to the object which has the element's id and value
  //the object is usually expressed as {id:id, value:value} but ES^ introduced a shortcut where if the property and the value of the property are the same then we can shorten it to just id (or value)
  const todoArrayItem = { id, value }
  //then we will need to get those items - they are not there now but eventually they will be so we need to check if they are already in local storage because if not then we will need to add them
  //the items we want to get here are the items in the todolist added by the user - we arrange them in an array and assign a variable to that array. If we console.log here for what is in the local storage, i.e. is there an item with the name of todoListItem,  it should be blank.
  //let todoListItem = localStorage.getItem('list')
  //console.log(todoListItem)
  //now add an item to the todo list and check the local storage - it should be empty
  //now set up a ternary operator where if there is an item then get the item assign that item to the variable 'todoListItem' and if there is no item, i.e. no list, then just set this up as an empty array. We are unable to use the above getItem because here we are dealing with arrays and objects so we have to replace it with
  //let todoListItem = localStorage.getItem('list')
  //? JSON.parse(localStorage.getItem('list'))
  //: []

  //the above three single-line comments are the code that was here before we copied the right hand side to the function getLocalStorage below and made it return the result and replaced the above by simply invoking the getLocalStorage() function - this rearrangement does not affect the functionality
  let todoListItem = getLocalStorage()

  //"localStorage.getItem('list')" in the line above is just checking whether the item exists or not
  //in the final code this will be "let todoListItem = getLocalStorage()" and the long-form one above will be copied below as the last function
  //"?JSON.parse(localStorage.getItem('list')) : [ ]" - this says that if the item referred to in the line above exists then get it using JSON.parse() and if it doesn't then set my items equal to an empty array
  //so now we can either get the array 'list' or an empty array, and we know that at this point we have an empty array

  //we now add the todoArrayItem to the array todoListITem using the push method
  todoListItem.push(todoArrayItem)

  //we now have our items ready to go so we can now use setItem method using JSON.stringify() (so that if the item is not there then we set it up and if its there then we will get it back)
  localStorage.setItem('list', JSON.stringify(todoListItem))
  console.log(todoListItem)

  //above, we finally check with console.log and with local storage in the browser - the first item we insert there will not be any items (empty array) because the JSON.parse will be equal to the emty array we already covered and the item would not have been set yet but then when we insert our second item then the localStorage.getItem ('list') won't be no anymore

  //console.log('added to local storage')

  //for both remove and edit functions, we would still want to access whatever we got back from localStorage.getItem('list') above so we would create a function in order to handle this. The getLocalStorage() function will be copied from above and inserted  after the remove and edit functions - we do not pass any parameters to it and instead we return the result. See below for code (the functionality does not change)
}

function removeFromLocalStorage (id) {
  console.log('remove from local storage')
  //we call this function when we are deleting an item with addToLocal Storage above, we want to get the items in local storage so we do the same thing as in addToLocalStorage above if we have the item we assign the variable to its value and if we don't have an item then we set our variable to an empty array. At this point we already have a list of items arranged in an array, so the todoListItems variable will be equal to the array of values that are already in local storage.
  let todoListItems = getLocalStorage()

  //now that we have the array we use the filter method to iterate over the array that we are getting back from 'getLocalStorage' and then I will call my callback function. I can access each item as a parameter
  todoListItems = todoListItems.filter(function (todoListItem) {
    if (todoListItem.id !== id) {
      //this says that if the item id (because this is one of the properties) that I have within the item that is coming back from local storage does not match the id that I am passing in when I'm deleting the item, then return the item. So here I'm just filtering out the values that don't match this id, and the id that actually matches to whatever I'm passing in here will be the one that will get removed.
      return todoListItem
    }
  })
  //now in the end I will still need to set the new values which we can copy from addToLocalStorage() function above
  localStorage.setItem('list', JSON.stringify(todoListItems))

  //so for the above removeFromLocalStorage() function, we first grab whatever items are already in the local storage using getLocalStorage() and assign it to a variable (in this case,the variable is 'todoListItems') -> then, we filter those items and in the callback function we can access each and every item - this will already be the local storage item -> then on that item we have the id property -> once we remove the item then I will set it in local storage
}

//edit local storage
//the set up for editing our local storage is like the others - we let the items equal to the getLocalStorage() function which would either give us what is in our list or it would give us an empty array
function editLocalStorage (editID, todoValue) {
  //console.log('edit local storage')
  let items = getLocalStorage()

  //here we are passing in two values, editID and todoValue, so we scroll up the document to see where we called this and we see that we called it 1)when we called the function editTodoItem() and 2) when adding an item (first function "function addItem(e)) and the list value !== '' && editFlag = true (so when we were actually editing)here we actually called the editLocalStorage(editId, todoValue). The editID we passed here was the editId which we declared at the beginning of the document along with the other edit options and the value was the new value. What we need to do now is to get our item from the list (the one that is sitting in the local storage) and update its value and so we do need the id to access that item but we change it into my value.

  items = items.map(function (item) {
    if (item.id === editID) {
      item.value = todoValue
    }
    return item
  })
  localStorage.setItem('list', JSON.stringify(items))
}
/*continued from above - see paragraph before function removeFromLocalStorage(todoId)*/
function getLocalStorage () {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}

/*******SET-UP ITEMS********/
//the final thing to do is to load and display the items from local storage so that if user refreshes page they will still be able to view the items that they had entered. We need to access the items from local storage once the app loads and then just display all. To set that up we need to set up an event listener for DOMContentLoaded
function setupItems () {
  let items = getLocalStorage()

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItems(item.id, item.value)
    })
    container.classList.add('show_container')
  }
}

//here we need to check if items have any length in which case we would want to display them - we will need to iterate over them and create those new items. These items have of course already been created above when we were adding an item when value !== '' && editFlag = false. So it would make sense to create a function and take the code that was used to create those elements and pass it into the function. We call the function twice, 1)when we are submitting the form (or adding an item) and 2)when we are iterating over the items we will call my forEach and then for each and every item I will call that function. The function will be createListItems(id, value) and we copy and paste the code above which creates the elements
function createListItems (todoId, todoValue) {
  const article = document.createElement('article')
  article.classList.add('todo_item')
  const idAttribute = document.createAttribute('data-id')

  idAttribute.value = todoId
  article.setAttributeNode(idAttribute)
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
  const deleteButton = article.querySelector('.delete_btn')
  deleteButton.addEventListener('click', deleteTodoItem)

  const editButton = article.querySelector('.edit_btn')
  editButton.addEventListener('click', editTodoItem)

  list.appendChild(article)
}
