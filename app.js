// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
    //prevent form from submitting
   event.preventDefault();
   //todo Div
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   
   //Create Li
   const newTodo = document.createElement('li');
   newTodo.innerText = 'hey'
   todoDiv.classList.add("todo-item");
   todoDiv.appendChild(newTodo);

   //Check mark button
   const completeButton = document.createElement('button');
   completeButton.innerHTML = '<i class="fas fa-check"></i>';
   completeButton.classList.add("complete-btn");
   todoDiv.appendChild(completeButton);
   
   //Check trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("complete-btn");
   todoDiv.appendChild(trashButton);

   //append to list
   todoList.appendChild(todoDiv);

   //23:46 video time

}