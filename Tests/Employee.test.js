//import the employee class constructor and file
const Employee = require('../lib/Employee');

test('creates a new employee object with a name, id, and email', () =>{
    const newEmployee = new Employee('Mike', 52, 'mike@mikecsanders.com');

    //testing object creation
    expect(newEmployee.name).toBe('Mike');
    expect(newEmployee.id).toBe(52);
    expect(newEmployee.email).toBe('mike@mikecsanders.com')

    //testing the get name function
    expect(newEmployee.getName()).toEqual(expect.any(String));

    //testing the get email function
    expect(newEmployee.getEmail()).toEqual(expect.any(String));

    //testing the get role function
    expect(newEmployee.getRole()).toBe('Employee');

    expect(newEmployee.getID()).toEqual(expect.any(Number));
});