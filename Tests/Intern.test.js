//import the intern class constructor and file
const Intern = require('../lib/Intern');

test(`creates a new intern object with a name, id, email, and the intern's school`, () =>{
    const newIntern = new Intern('Mike', 52, 'mike@mikecsanders.com', 'University Awesome');

    //testing Engineer creation
    expect(newIntern.name).toBe('Mike');
    expect(newIntern.id).toBe(52);
    expect(newIntern.email).toBe('mike@mikecsanders.com');
    expect(newIntern.school).toBe('Mike-C-Sanders');

    //testing Intern name function
    expect(newIntern.getName()).toEqual(expect.any(String));

    //testing Intern email function
    expect(newIntern.getEmail()).toEqual(expect.any(String));

    //testing Intern role function
    expect(newIntern.getRole()).toBe('Engineer');

    //testing InternID function
    expect(newIntern.getID()).toEqual(expect.any(Number));

    //testing Intern get school function
    expect(newIntern.getSchool()).toEqual(expect.any(String));
});