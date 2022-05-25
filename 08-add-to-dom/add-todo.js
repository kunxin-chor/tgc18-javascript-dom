/* use the innerHTML to add a new todo to the
ul#todos */
document.querySelector('#btnAdd')
      .addEventListener('click', function(){
      let todo = document.querySelector('#newTodo').value;

    let urgentCheckbox = document.querySelector('#urgentCheckbox');
    let bgColor = 'white';
    if (urgentCheckbox.checked) {
        bgColor = 'red'
    }

    // document.querySelector('#todos').innerHTML += '<li style="background-color:' + bgColor +'">' + todo + '</li>'
      document.querySelector('#todos').innerHTML += `<li style="background-color:${bgColor}">
        ${todo}
      </li>`
      
    })