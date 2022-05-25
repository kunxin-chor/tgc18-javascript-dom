// event: button click
// input: the number is from Math.random
// process: not much
// output: the number should appear in
// ul#number-list
document.querySelector('#addRandomBtn')
    .addEventListener('click', function(){
        
        let randomNumber = Math.floor(Math.random() * 100 + 1)
        // Math.random() will give 0 to 0.99
        // * 100 = 0.xxx to 99.999
        // +1 = 1.xxxx to 100.xxxx
        let numberList = document.querySelector('#number-list');
        // whenever the innerHTML of  an element changes
        // the browser will recreate it
        numberList.innerHTML += "<li>" + randomNumber + "</li>";
    })