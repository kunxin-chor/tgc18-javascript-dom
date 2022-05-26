async function run() {
    let response = await axios.get('shop.json');
    let services = response.data;

    // state variable to store the cost
    // a state variable is a variable that saves or remembers
    // certain facts abot your program
    let totalCost = 0;

    for (let eachService of services) {

        // result: <div>
        let divElement = document.createElement('div');

        // result: <input type="checkbox" value="${eachService.value}"" class="form-check-input services">
        let inputElement = document.createElement('input');
        inputElement.type = "checkbox";
        inputElement.value = eachService.value;
        // to set the class of an element object, use `className`
        inputElement.className = "form-check-input services";
        inputElement.addEventListener('change', function () {
            if (inputElement.checked) {
                totalCost += eachService.cost;
            } else {
                totalCost -= eachService.cost;
            }
            document.querySelector('#totalCost').innerHTML = totalCost;
        })

        // result: <label class="form-check-label">${eachService.name}</label>
        let labelElement = document.createElement('label');
        labelElement.className = "form-check-label";
        labelElement.innerHTML = `${eachService.name} (${eachService.cost})`

        // <div>
        //    <input>
        // </div>
        divElement.appendChild(inputElement);

        //  <div>
        //    <input>
        //    <label>
        //  </div>
        divElement.appendChild(labelElement);

        document.querySelector('#services')
            .appendChild(divElement);


    }
}

run();