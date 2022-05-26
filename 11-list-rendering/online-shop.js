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

for (let eachService of services) {
    let html = `
            <div>
                <input type="checkbox" class="form-check-input services"
                       value="${eachService.value}"/>
                <label>${eachService.name} ($${eachService.cost})</label>
            </div>
    `;

    document.querySelector('#services').innerHTML += html;
}