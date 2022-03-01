const Employee = require('./Employee');

//child class of the Employee. Manager class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;