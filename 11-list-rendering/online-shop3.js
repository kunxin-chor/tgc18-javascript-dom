// state variable 
let totalCost = 0;

let services = [
    {
        "name":"Free flow drinks",
        "cost": 2.50,
        "value": "free-flow-drinks"
    },
    {
        "name":"Birthday cake",
        "cost": 20.00,
        "value":"birthday-cake"
    },
    {
        "name":"Animal mascot",
        "cost": 35.00,
        "value":"animal-mascot"
    },
    {
        "name":"Birthday song",
        "cost": 5.00,
        "value":"birthday-song"
    },
    {
        "name":"Perform the hand-made noodle dance",
        "cost": 7.50,
        "value":"make-noodle"
    }
]

// use the html variable to buffer all the new elements
let html = "";
for (let eachService of services) {
    html += `
            <div>
                <input type="checkbox" class="form-check-input services"
                       value="${eachService.value}"
                       data-cost="${eachService.cost}"/>
                <label>${eachService.name} ($${eachService.cost})</label>
            </div>
    `;

}
// whenever the innerHTML changes, the elements are recreated
// create all the new elements in one shot
document.querySelector('#services').innerHTML += html;

let servicesDiv = document.querySelector('#services');
let allCheckboxes = servicesDiv.querySelectorAll('.services');
for (let eachCheckbox of allCheckboxes) {
    // the first argument to the function is event
    // event stores all the information about the event
    // like the position of the mouse cursor etc etc.
    // BUT the most important thing is : which element did the event occurs
    // on --> also know event target
    eachCheckbox.addEventListener('change', function(event){
        let cost = parseInt(event.target.dataset.cost);
        if (event.target.checked) {
            totalCost += cost;
        } else {
            totalCost -= cost;
        }
        document.querySelector('#totalCost').innerHTML = totalCost;
    })
}
