//const { assert } = require("node:console");

describe("Registration numbers project", function(){
    context("Given a valid registration number", function(){
        const registrationNumbers = RegistrationNumbers();
        it("should be able to return the added registration number", function(){
            registrationNumbers.addRegistrationNumber('ca1233');
            assert.equal('CA 1233', registrationNumbers.formatRegistrationNumber('ca1233'));
        })
    });

    context("Given an invalid registration number", function(){
        const registrationNumbers = RegistrationNumbers();
        it("should return an invalid registration number error", function(){
            registrationNumbers.addRegistrationNumber('cd1233');
            assert.equal('Invalid registration number', registrationNumbers.getErrorMessage());
        });
    });

    context("Without registration number", function(){
        const registrationNumbers = RegistrationNumbers();
        it("should return: Please enter registration number", function(){
            registrationNumbers.addRegistrationNumber('');
            assert.equal('Please enter registration number', registrationNumbers.getErrorMessage());
        })
    });

    context("Formatting registration numbers", function(){
        const registrationNumbers = RegistrationNumbers();
        it("should be able to format registration numbers", function(){
            assert.equal('CA 235', registrationNumbers.formatRegistrationNumber('Ca235'));
        });
    });

    context("Filter registration number by town", function(){
        const registrationNumbers = RegistrationNumbers();
        it("Should be able to return a filtered registration numbers by that town", function(){
            registrationNumbers.addRegistrationNumber('ca1233');
            registrationNumbers.addRegistrationNumber('cj1344');
            registrationNumbers.addRegistrationNumber('cy2344');
            var results = registrationNumbers.getRegistrationNumbers('capetown');
            assert.deepEqual(['ca1233'], results);
        });
    });
});