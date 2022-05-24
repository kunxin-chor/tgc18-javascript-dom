let calculateButton = document.querySelector('#calculateBtn');

calculateButton.addEventListener('click', function(){
    let weightInput = document.querySelector('#weight');
    let weight = Number(weightInput.value);

    let heightInput = document.querySelector('#height');
    let height = Number(heightInput.value);

   let bmi = weight / height ** 2;

   let resultDiv = document.querySelector('#result');
   resultDiv.innerHTML= "<h2>BMI: " + bmi +"</h2>";

})