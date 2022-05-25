document.querySelector('#btnAdd')
    .addEventListener('click', function(){
        let newTodo = document.querySelector('#newTodo').value;

        let isUrgent = document.querySelector('#urgentCheckbox').checked;
        console.log("isUrgent =", isUrgent);
        let bgColor = 'white';
        if (isUrgent) {
            bgColor = 'red';
        }

        // create the new <li> element
        let newListElement = document.createElement('li');
        newListElement.innerHTML = newTodo;
        // newListElement.style.backgroundColor = isUrgent ? 'red' : 'white';
        newListElement.style.backgroundColor = bgColor;

        let todoList = document.querySelector('#todos');
        todoList.appendChild(newListElement);

    });