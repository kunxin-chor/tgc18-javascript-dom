

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    // querySelector to select an element from the DOM
    // by class, id, or tag name

    // select by the name of a html tag
    let header = document.querySelector('h1');
    header.style.color = 'red';

    // if there multiple matches, only the first
    // one is taken
    let todo = document.querySelector('li');
    todo.style.backgroundColor = 'yellow';
    // for css properties, we use camel case

    // select by id we use #
    let subtitle = document.querySelector('#todo-title');
    // same way as how we write css selectors in css file
    subtitle.style.fontFamily = "Verdana";

    let urgent = document.querySelector('.urgent');
    urgent.style.color = 'red';

    // selecting more than one
    // will return an array of DOM objects
    let todos = document.querySelectorAll('li');
    for (let t of todos) {
        // we need a for loop to retrieve each
        // DOM object from the array then
        // change its style or whatever
        t.style.border = "1px solid black";
    }
})