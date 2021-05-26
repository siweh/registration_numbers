function RegistrationNumbers() {
    var registrationNumbers = [];
    var errMessage = '';
    var filteredRegNumbbers = [];
    function addRegistrationNumber(regNumber) {
        //console.log(regNumber);
        //var numberRegx = /^[A-Z]{2}[ ][0-9]{2}$/;

        console.log(!registrationNumbers.includes(regNumber));

        if (!registrationNumbers.includes(regNumber)){
            registrationNumbers.push(regNumber);
        }

        console.log(registrationNumbers);

       // registrationNumbers.filter(town);
    }

    function filterRegistrationByNumber(town) {

        // if (town === 'capetown') {
        //     filteredRegNumbbers = registrationNumbers.filter(function(regNo) {
        //         if (regNo.startsWith('ca')) {
        //             return regNo;
        //         }
        //     });
        // }
    }
    function formatRegistrationNumber(regNumberMsg) {
        return regNumberMsg.substring(0,2).toUpperCase() +' '+ regNumberMsg.slice(2);
    }

    function getRegistrationNumbers() {
        return registrationNumbers;
    }
    function getFilteredRegistrationNumbers() {
        return filteredRegNumbbers;
    }
    function getErrorMessage() {
        return errMessage;
    }

    return {
        addRegistrationNumber,
        getErrorMessage,
        getRegistrationNumbers,
        formatRegistrationNumber,
        getFilteredRegistrationNumbers,
        filterRegistrationByNumber
    }
}