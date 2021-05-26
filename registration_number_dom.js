// var addBtn = document.createElement('button');
// document.body.appendChild(addBtn);
var addBtn = document.querySelector(".add-btn");
var inputElement = document.querySelector(".text-input");
var townSelect = document.querySelector(".town");
var regNumberDisplay = document.getElementById("message");
var errorMsg = document.getElementById("error");
var dropDownBtn = document.querySelector("button");


const registrationNumbers = RegistrationNumbers();

function addingRegNumbers() {
    //console.log(inputElement.value);
   
    var getTextValue = inputElement.value;
    registrationNumbers.addRegistrationNumber(getTextValue);
    var displayRegistration = document.createElement('regNo');
    var regNumbsrsList = registrationNumbers.getRegistrationNumbers();
    
    var displayChip = document.createElement('div');
    displayChip.classList.add('chip');
            
    regNumberDisplay
    .appendChild(displayChip)
    .appendChild(displayRegistration);

    for (let i = 0; i < regNumbsrsList.length; i++) {
        var registrationNumberDisplay = registrationNumbers.formatRegistrationNumber(regNumbsrsList[i]);
        displayRegistration.innerHTML = registrationNumberDisplay;
    }
    //displayRegistrationNumbers(registrationNumbers.getRegistrationNumbers());
    //Clear the value in the textBox after the add button is clicked
    inputElement.value = "";


    var displayErrorMsg = document.createElement('errorMessage');
    displayErrorMsg.classList.add('error');
    errorMsg.appendChild(displayErrorMsg);
    displayErrorMsg.innerHTML = registrationNumbers.getErrorMessage();
}

function displayRegistrationNumbers(regNumbsrsList = []) {
    
    
    if (regNumbsrsList.length > 0){
        console.log(regNumbsrsList);

        for (let i = 0; i < regNumbsrsList.length; i++) {
            var registrationNumberDisplay = registrationNumbers.formatRegistrationNumber(regNumbsrsList[i]);
            displayRegistration.innerHTML = registrationNumberDisplay;
        }
    }
}


function filterByTown() {
    var getTownSelected = townSelect.value;
    //displayRegistration.innerHTML = '';
    //console.log(registrationNumbers.getRegistrationNumbers(getTownSelected));
    //registrationNumbers.filterRegistrationByNumber(getTownSelected);
   displayRegistrationNumbers(registrationNumbers.getRegistrationNumbers(getTownSelected));
   
}

//townSelect.addEventListener('change', filterByTown);
addBtn.addEventListener('click', addingRegNumbers);