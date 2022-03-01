//Employee Class constructor. This is the parent class for the other roles.
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        console.log(`This is ${this.name}`);
        return this.name;
    }

    getID(){
        console.log(`ID #${this.id}`)
        return this.id;
    }

    getEmail(){
        console.log(`Email: ${this.email}`);
        return this.email;
    }

    getRole(){
        return `Employee`;
    }
}

module.exports = Employee;