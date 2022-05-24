let todos = document.querySelectorAll('#todos li');
for (let t of todos) {
    t.style.backgroundColor = 'yellow';
}

let header = document.querySelector('h1');
header.addEventListener('mouseenter', function(){
    header.style.backgroundColor = 'lavender';
})

header.addEventListener('mouseleave', function(){
    header.style.backgroundColor = 'white';
})
