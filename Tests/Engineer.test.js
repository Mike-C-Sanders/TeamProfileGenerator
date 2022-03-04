//import the engineer class constructor and file
const Engineer = require('../lib/Engineer');

test('creates a new engineer object with a name, id, email, and github', () =>{
    const newEngineer= new Engineer('Mike', 52, 'mike@mikecsanders.com', 'Mike-C-Sanders');

    //testing Engineer creation
    expect(newEngineer.name).toBe('Mike');
    expect(newEngineer.id).toBe(52);
    expect(newEngineer.email).toBe('mike@mikecsanders.com');
    expect(newEngineer.github).toBe('Mike-C-Sanders');

    //testing Engineer name function
    expect(newEngineer.getName()).toEqual(expect.any(String));

    //testing Engineer email function
    expect(newEngineer.getEmail()).toEqual(expect.any(String));

    //testing Engineer role function
    expect(newEngineer.getRole()).toBe('Engineer');

    //testing the get ID function
    expect(newEngineer.getID()).toEqual(expect.any(Number));

    //testing the github function
    expect(newEngineer.getGithub()).toEqual(expect.any(String));
});