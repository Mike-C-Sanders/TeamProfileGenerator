# Team Profile Generator

A simple command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

Application is leveraging NodeJS NPM Modules: Inquirer and Jest.

![screenshot](./img/Screenshot.JPG)

## Technologies Used

    HTML
    CSS
    JavaScript/NodeJS

    NPM Modules:
    Inquirer
    Jest

## File Structure 

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

## How to Use

Make sure you've downloaded NODEJS and the required npm modules. For more details or instructions see the resources section below.

1. Intiate the node environment by typing the command node index.js

2. Add team members to your engineering team by following all prompted questions in the command line. You can add up to one manager and as many other interns and engineers as you need.

3. Once you've determined what team members, select the "finish building team" option in the list. This will intiate the new html file. 

4. Open the index.html file and see your finished team.

## Video Walk Through

![gif](./img/video.gif)

Full YOUTUBE Walk Through ![youtube](https://www.youtube.com/watch?v=zZUXFX8LYDQ)

## Resources

    NodeJS- https://nodejs.org/

    Inquirer - https://www.npmjs.com/package/inquirer

    Jest - https://jestjs.io/docs/getting-started