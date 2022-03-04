//import the manager class constructor and file
const Manager = require('../lib/Manager');

test(`createswManager. object with a name, id, email, and the manager's office number`, () =>{
    const newManager = new Manager('Mike', 52, 'mike@mikecsanders.com', 20);

    //Testing the creation of a new manager object
    expect(newManager).toBe('Mike');
    expect(newManager).Be(52);
    expect(newManager).toBe('mike@mikecsanders.com');
    expect(newManager).toBe(20);

    //testing manager function get name
    expect(newManager.getName()).toEqual(expect.any(String));

    //testing manager function get email
    expect(newManager.getEmail()).toEqual(expect.any(String));

    //testing Manager function get role
    expect(newManager.getRole()).toBe('Engineer');

    //testing Manager function  get ID
    expect(newManager.getID()).toEqual(expect.any(Number));

});