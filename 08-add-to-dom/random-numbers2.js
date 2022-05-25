document.querySelector('#addRandomBtn')
    .addEventListener("click", function(){
        let randomNumber = Math.floor(Math.random() * 100 + 1);

        // create a new <li> element
        let liElement = document.createElement('li');
        // set the innerHTML to be the number
        // eg. if the randomNumber is 45
        // eqv. <li>45</li>
        liElement.innerHTML = randomNumber;
        liElement.addEventListener('click', function(){
            alert(randomNumber);
        })

        let numberListElement = document.querySelector('#number-list');
        numberListElement.appendChild(liElement);

    })