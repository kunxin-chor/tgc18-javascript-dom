document.querySelector('#btnIncrement')
    .addEventListener('click', function(){
        let numberBox = document.querySelector('#number');
        numberBox.innerHTML = parseInt(numberBox.innerHTML) + 1;
        if (document.querySelector("#number").innerHTML % 2 == 0) {
            numberBox.style.backgroundColor = 'green'
        } else {
            numberBox.style.backgroundColor = 'red'
        }
        
    })

document.querySelector("#btnDecrement")
    .addEventListener('click', function(){
        let numberBox = document.querySelector('#number');
        numberBox.innerHTML = parseInt(numberBox.innerHTML) - 1;
        if (document.querySelector("#number").innerHTML % 2 == 0) {
            numberBox.style.backgroundColor = 'green';
        } else {
            numberBox.style.backgroundColor = 'red';
        }
        
    })

document.querySelector('#btnSet')
    .addEventListener('click', function(){
        let newNumber = document.querySelector('#newNumber').value;
        document.querySelector('#number').innerHTML = newNumber;
        if (document.querySelector("#number").innerHTML % 2 == 0) {
            document.querySelector("#number").style.backgroundColor = 'green';
        } else {
            document.querySelector("#number").style.backgroundColor = 'red';
        }
    });