const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const generatedEmployeeHTML=require("./template/employee")
const Engineer = require("./lib/Engineer")
// const Intern = require("./Develop/lib/Intern")
// const Manager = require("./Develop/lib/Manager")

let count = 0
let employeeArray = []

const askquestion = () => {
  inquirer.prompt([
    {
      type : "input",
      message : "What is your employee's name?",
      name : "EmployeeName"
    },
    {
      type : "input",
      message : "What is your employee's email?",
      name : "EmployeeEmail"
    }
  ]).then((userInput) => {
       
      let employee = new Employee(userInput.EmployeeName, userInput.EmployeeEmail)

      employeeArray.push(employee)
      console.log(employee)
      count++
      if(count > 1) {
        askquestion()
      }
      else {
       
     askEngineer();   
      }
       
  })  

  

const askEngineer = () => {
  inquirer.prompt([
    {
      type : "input",
      message : "What is your engineer's name?",
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
      console.log(engineer)
      count++  
      if(count === 3) {
        askManager()
      }
      else {
        return  
      }
      
  })  

}
}
askquestion()


let makeHTML = ()=>{

    var dataStr= generatedEmployeeHTML(employeeArray)

    fs.writeFileSync("./employeeOut.html",dataStr,(err)=> {
      
      if(err){
        console.log(err)
      }
      console.log("success")
    })

}
  