function RegistrationNumbers(registrationNumbersList = []) {
    console.log(registrationNumbersList);
    //console.log(["qqq","vvv"]);
    var registrationNumbers = registrationNumbersList !== null ? registrationNumbersList : [];
    var errMessage = '';
    var filteredRegNumbers = [];
    function addRegistrationNumber(regNumber) {
        //console.log(regNumber);
        //var numberRegx = /^[A-Z]{2}\s[0-9]{3}[A-Z]{2}\s[0-9]{3}$/;


        if (!registrationNumbers.includes(regNumber.toLowerCase())){
            if(regNumber.length >= 10){
                errMessage = 'Registration number should not be this long';
            }else{
                if (regNumber.startsWith('ca') || regNumber.startsWith('cj') || regNumber.startsWith('cy')){
                    errMessage = '';
                    registrationNumbers.push(regNumber.toLowerCase());
                }else{
                    errMessage = 'Invalid registration number';
                }
            }
        }else{
            errMessage = 'Registration number already exists';
        }

        if (regNumber === ''){
            errMessage = 'Please enter registration number';
        }
        //console.log(registrationNumbers);
    }

   
    function formatRegistrationNumber(regNumberMsg) {
        return regNumberMsg.substring(0,2).toUpperCase() +' '+ regNumberMsg.slice(2);
    }

    function getRegistrationNumbers(town = 'all') {
        function isCapeTownReg(regNo) {
            if (town === 'capetown') {
                return regNo.startsWith('ca');
            }else if (town === 'paarl'){
                return regNo.startsWith('cj')
            }else if (town === 'bellville'){
                return regNo.startsWith('cy')
            }
            else if(town === 'all'){
                return true;
            }
                
        }

        return registrationNumbers.filter(isCapeTownReg);
    }
    
    function getFilteredRegistrationNumbers() {
        return filteredRegNumbers;
    }
    function getErrorMessage() {
        return errMessage;
    }

    return {
        addRegistrationNumber,
        getErrorMessage,
        getRegistrationNumbers,
        formatRegistrationNumber,
        getFilteredRegistrationNumbers
    }
}