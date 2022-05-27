// MODEL:contains data AND also functions that modifies teh data
let model = {
    number: 0
}

function setNumber(newNumber) {
    if (newNumber >= 0 && newNumber <= 10) {
        model.number = newNumber;
    }
}
// CONTROLLER
function controller() {
    document.querySelector('#btnIncrement').addEventListener('click', function(){
        setNumber(model.number + 1)
        updateView();
    });
    document.querySelector("#btnDecrement").addEventListener('click', function(){
        setNumber(model.number -1);
        updateView();
    })

    document.querySelector('#btnSet').addEventListener('click', function(){
        let newNumber = document.querySelector('#newNumber').value;
        setNumber(newNumber);
      
        updateView();
    })
}

// VIEW FUNCTIONS
function updateView() {
    let numberBox = document.querySelector('#number');
    numberBox.innerHTML = model.number;
    // all the logic pertaining to visual styling
    // should be in the updateView() function
    if (model.number % 2 ==0) {
        numberBox.style.backgroundColor = 'green'
    } else {
        numberBox.style.backgroundColor = 'red';
    }
}

controller();
updateView();