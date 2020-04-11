//Variables
const todoInput = document.querySelector('.todoInput')
const todoButton = document.querySelector('.todoButton')
const todoList = document.querySelector('.todoList')

//Events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)

//Functions

function addTodo(event){
    event.preventDefault(); // This will prevent reloading the page when the event is being activated.
    
    // Todo 'div'
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
   
    // Create 'li'
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
   
    // Complete button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    
    // Trash button
     const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
    
    // Append to list
     todoList.appendChild(todoDiv);
    
    // Clear the input field after added todo
     todoInput.value = ""; 
}

function deleteCheck(){
    const item = event.target;

    // Delete todo
    if(item.classList[0] === 'trash-btn'){
        // item.parentElement.remove();
        item.parentElement.classList.add('slide')
        item.parentElement.addEventListener("transitionend", function() {
            item.parentElement.remove()
        })
    }

    // Check mark
    if(item.classList[0] === 'complete-btn'){
        item.parentElement.classList.toggle('completed');
    }
}