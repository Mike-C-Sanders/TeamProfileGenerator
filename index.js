//classes required
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//inquire npm used for user prompting and filesystem (FS) used for writing to the HTML File.
const inquirer = require('inquirer');
const fs = require('fs');

//array which will be used to store the team's profile from inquirer prompt.
const teamProfile = [];

const managerQuestions = [
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

const addManager = () => {
    return inquirer.prompt(managerQuestions)
    .then((answers)=>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

        teamProfile.push(manager);
    });
}