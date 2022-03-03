//HTML Template file

//add a manager card to the HTML page, passing in the Manager class
const addManagerCard = (manager) =>{
    `<div class="col-4 mt-4">
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
    ` <div class="col-4 mt-4">
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
const addInternClass = (intern) =>{
    `<div class="col-4 mt-4">
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