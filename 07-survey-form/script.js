let button = document.querySelector('#submitBtn');
button.addEventListener('click', function(){
    let emailInput = document.querySelector('#email');
    let email = emailInput.value;

    // 1. indicate we have no idea which occupation is selected
    let selectedOccupation = null;

    // 2. select all the occupation radio buttons
    let radioButtons = document.querySelectorAll('.occupation');
    // let radioButtons = document.getElementsByName('occupation');
    // let radioButtons = document.querySelectorAll('[name="occupation"]')
    for (let b of radioButtons) {
        if (b.checked) {
            selectedOccupation = b.value;
            break;
        }
    }

    let selectedInterests = [];
    let checkboxes = document.querySelectorAll('.interests');
    for (let c of checkboxes) {
        if (c.checked) {
            selectedInterests.push(c.value);
        }
    }

    // let selectedCheckboxes = document.querySelectorAll('.interests:checked')

    let holidaySelect = document.querySelector('#holiday');
    let holidayFrequency = holidaySelect.value;
    console.log(email, selectedOccupation, selectedInterests, holidayFrequency);
})