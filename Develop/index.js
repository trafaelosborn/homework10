const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const {generatedInternHTML, generatedManagerHTML }=require("./template/templategenerator")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")


const employeeArray = []
let manager = {};


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
       
      manager = new Manager(userInput.ManagerName, userInput.ManagerEmail, userInput.ManagerOffice)

      console.log(manager)
  })  
  .then(function() {
    addEmployee()
  });
  
const addEmployee = () => {
  inquirer.prompt([
  {
    type : "confirm",
    message : "Would you like to add an employee?",
    name : "confirmAdd"
  }
 
  
]).then(userInput  => {
  userInput.confirmAdd ? whichEmployee() : makeHTML()
})
}

whichEmployee = () => {
  inquirer.prompt (
    {
      type : "list",
      choices : ["Engineer", "Intern"],
      message: "What kind of employee would you like to add?",
      name: "employeeType"
    }
      ).then(userInput => {
        userInput.employeeType === "Engineer" ? askEngineer() : askIntern()
      }       
        )         
}

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
    },
    
  ]).then((userInput) => {
       
      let engineer = new Engineer(userInput.EngineerName, userInput.EngineerEmail, userInput.EngineerGithub)

      employeeArray.push(engineer)
        
  })  
  .then(function() {
    addEmployee()
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
      employeeArray.push(intern)
      console.log(employeeArray)    
  })  
  .then(function(){
    addEmployee()
  })
}

}



askquestion()


let makeHTML = ()=>{
    
    var pageHTML= generatedManagerHTML(manager, employeeArray)

    fs.writeFileSync("./employeeOut.html",pageHTML,(err)=> {
      
      if(err){
        console.log(err)
      }
      console.log("success")
    })

}
  