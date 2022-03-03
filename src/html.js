//HTML Template file

//add a manager card to the HTML page, passing in the Manager class
const addManagerCard = (manager) =>{
    return `<div class="col-4 mt-4">
    <div class="card ">
        <div class="card-header bg-primary bg-gradient text-white">
            <h3>${manager.name}</h3>
            <h4><i class="fa-solid fa-mug-hot"></i> Manager</h4> 
            
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>`
}

//add engineer card to the HTML page, passing in the Engineer class
const addEngineerCard = (engineer) =>{
    return ` <div class="col-4 mt-4">
        <div class="card ">
            <div class="card-header bg-primary bg-gradient text-white">
                <h3 class="card-title">${engineer.name}</h3>
                    <h4><i class="fa-solid fa-laptop-code"></i> Engineer</h4> 
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github Profile: <a href="https://github.com/${engineer.github}">${engineer.name}</a> </p>
            </div>
        </div>
    </div>`
}

//add intern card to the HTML page, passing in the Intern Class
const addInternCard = (intern) =>{
    return `<div class="col-4 mt-4">
        <div class="card ">
            <div class="card-header bg-primary bg-gradient text-white">
            <h3 class="card-title">${intern.name}</h3>
            <h4><i class="fa-solid fa-graduation-cap"></i> Intern</h4> 
                            
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>`
}

//function to loop through the array of profiles created and add them to the html text.
const loopCreate = (teamProfileArray) =>{
    //initialize a string to be returned once finished looping
    const profileHTML = [];
    //loop through the answers from team profile and add those to the array as strings
    for(let i = 0; i < teamProfileArray.length; i++){
        if(i === 0){
            profileHTML[i] = addManagerCard(teamProfileArray[0]);
        }
        else if(teamProfileArray[i].getRole() === 'Engineer'){
            profileHTML[i] = addEngineerCard(teamProfileArray[i]);
        }
        else if(teamProfileArray[i].getRole() === 'Intern'){
            profileHTML[i] = addInternCard(teamProfileArray[i]);
        }
    }

    //join and return final string from the results above.
    return profileHTML.join('');
}
//create the text for the HTML file written in the index.js main file. array passed in is the team profile gathered using inquirer
const createHTML = (teamProfileArray) => {
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <title>Team Profile</title>
        </head>
        <body>
            <header>
                <h1 class="text-center">My Team</h1>
            </header>
            <main>
                <section class="card-group">                
                    ${loopCreate(teamProfileArray)}
                </section>
                
            </main>
        </body>
        <script src="https://kit.fontawesome.com/e55a48a2c9.js" crossorigin="anonymous"></script>
    </html>`
}