// This project is purely for educational purposes

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let tasks = []
let taskCounter = document.getElementsByClassName(classNames.TODO_ITEM).childElementCount

function newTodo() {
  
  //New task and description
  let paragraph = document.createElement('li')
  paragraph.innerText = prompt('Enter your task: ')
  paragraph.classList.add(classNames.TODO_ITEM)


  //New Checkbox
  let checkBox = document.createElement('input')
  checkBox.type = "checkbox"
  checkBox.classList.add(classNames.TODO_CHECKBOX)
  checkBox.status = false;
  checkBox.addEventListener('click', isClicked)
  paragraph.append(checkBox)


  //Add delete button
  let deleteButton = document.createElement("button")
  deleteButton.className = 'button center '+ classNames.TODO_DELETE
  deleteButton.innerText = 'Delete'
  
  deleteButton.addEventListener('click', deleteFunction)   
  paragraph.append(deleteButton)
  list.appendChild(paragraph)
  updateCounters()

  
}

//Onclick listener for the counter checkbox
function isClicked () {  
  if (this.status === true) {
    this.status = false
  } else {
    this.status = true
  }
updateCounters()
}

//Counts the amount of unchecked boxes by checking the status
function countUncheckedBoxes() {
  let count = 0;
  let checkBoxArray = document.getElementsByClassName(classNames.TODO_CHECKBOX) 
  for (let i = 0; i<checkBoxArray.length; i++) {
    if (checkBoxArray[i].status === true) {
      count++;
    }
  }
  
  uncheckedCountSpan.innerText = checkBoxArray.length - count;
}

//Updates all counters
function updateCounters() {
  let taskCounter = document.getElementsByClassName(classNames.TODO_ITEM).length
  itemCountSpan.innerText = taskCounter
  countUncheckedBoxes()
}

//Deletes the object specified by which delete button is pressed
function deleteFunction() { 
 this.parentElement.remove()
 updateCounters()
}