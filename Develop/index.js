const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const {generatedInternHTML, generatedManagerHTML }=require("./template/employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")


let employeeArray = []
const managerArray = [];
const engineerArray = [];
const internArray = [];

const askquestion = () => {
  inquirer.prompt([
    {
      type : "input",
      message : "What is your manager's name?",
      name : "ManagerName"
    },
    {
      type : "input",
      message : "What is your manager's email?",
      name : "ManagerEmail"
    },
    {
      type : "input",
      message : "What is your manager's office number?",
      name : "ManagerOffice"
    }
  ]).then((userInput) => {
       
      let manager = new Manager(userInput.ManagerName, userInput.ManagerEmail, userInput.ManagerOffice)

      managerArray.push(manager)
      console.log(manager)
  })  
  .then(function() {
    askEngineer()
  });
  

const askEngineer = () => {
  inquirer.prompt([
    {
      type : "input",
      message : "Now it's time to add some cogs to this corporate juggernaut! What is your engineer's name?",
      name : "EngineerName"
    },
    {
      type : "input",
      message : "What is your engineer's email?",
      name : "EngineerEmail"
    },
    {
      type : "input",
      message : "What is your engineer's GitHub?",
      name : "EngineerGithub"
    }
  ]).then((userInput) => {
       
      let engineer = new Engineer(userInput.EngineerName, userInput.EngineerEmail, userInput.EngineerGithub)

      engineerArray.push(engineer)
      console.log(engineerArray)    
  })  
  .then(function() {
    askIntern()
  });
}

const askIntern = () => {
  inquirer.prompt([
    {
      type : "input",
      message : "What's your intern's name?",
      name : "InternName"
    },
    {
      type : "input",
      message : "What is your intern's email?",
      name : "InternEmail"
    },
    {
      type : "input",
      message : "Where does this poor bastard go to school?",
      name : "InternSchool"
    }
  ]).then((userInput) => {
       
      let intern = new Intern(userInput.InternName, userInput.InternEmail, userInput.InternSchool)
      internArray.push(intern)
      console.log(internArray)    
  })  
  .then(function(){
    makeHTML()
  })
}

}



askquestion()


let makeHTML = ()=>{
    var internHTML = generatedInternHTML(internArray);

    const pageHTML =  `
    
    <html>
    <head>
    
    </head>

       <body>
        ${internHTML}

       </body>
    </html>
    `
    var dataStr= generatedEmployeeHTML(managerArray, engineerArray, internArray)

    fs.writeFileSync("./employeeOut.html",pageHTML,(err)=> {
      
      if(err){
        console.log(err)
      }
      console.log("success")
    })

}
  