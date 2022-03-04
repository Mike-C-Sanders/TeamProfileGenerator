//classes required
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//inquire npm used for user prompting and filesystem (FS) used for writing to the HTML File.
const inquirer = require('inquirer');
const fs = require('fs');
const { choices } = require('yargs');
const html = require('./src/html');

//array which will be used to store the team's profile from inquirer prompt.
const teamProfile = [];

const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: `What's the manager's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `What's the manager's id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What's the manager's email address?`
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `What's the manager's office number?`
    }
]

//prompt questions for the engineer inquirer prompt 
const engineerQs = [
    {
        type: 'input',
        name: 'name',
        message: `What's the engineer's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `What's the engineer's id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What's the engineer's email address?`
    },
    {
        type: 'input',
        name: 'github',
        message: `What's the engineer's github user name?`
    }
];
//prompt questions for the intern inquirer prompt
const internQs = [
    {
        type: 'input',
        name: 'name',
        message: `What's the intern's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `What's the intern's id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What's the intern's email address?`
    },
    {
        type: 'input',
        name: 'school',
        message: `What's the name of the intern's school?`
    }
];
//function to create a new class instance of manager when called.
const addManager = () => {
    return inquirer.prompt(managerQs)
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        //add the new manager class to the team profile array.
        teamProfile.push(manager);
        menu();
    });
}

const addEngineer= () => {
    return inquirer.prompt(engineerQs)
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamProfile.push(engineer);

        menu();
    })
}

const addIntern = () => {
    return inquirer.prompt(internQs)
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamProfile.push(intern);

        menu();
    });
}

//menu of choices for the user when adding folks to their team
const menuQs = [
    {
        type: 'list',
        name: 'choice',
        message: `What would you like to do next? Add someone to your team or are you all done building your team?`,
        choices: ['Add an Engineer', 'Add an Intern', 'Finished Building']
    }
];

//menu function used to decide what to do next. selectin add intern/engineer or finishing adding and create file.
const menu = () => {
    return inquirer.prompt(menuQs)
    .then((answers) => {
        //user wants to add an engineer to their team
        if(answers.choices === 'Add an Engineer'){
            addEngineer();
        }
        //user wants to add an intern to their team
        else if(answers.choices === 'Add an Intern'){
            addIntern();
        }
        //user was done building call the write to HTML file function
        else{
            fs.writeFileSync('./src/html.js', createHTML(teamProfile));
        }
    })
}

