const generatedInternHTML = (intern) => {
  
    return `

        <div>
            name: ${ intern.name }
            email: ${intern.email}
            school: ${intern.school}       
        </div> 
        `
}

const generatedEngineerHTML = (engineer) => {
    
    return `

        <div>
            name: ${ engineer.name }
            email: ${engineer.email}
            github: ${engineer.github}       
        </div> 
    
        `
}

const generatedManagerHTML = (manager, employeeArray) => {
    const employees = employeeArray.map(
        employee => employee.getRole() === "Engineer" ? generatedEngineerHTML(employee) : generatedInternHTML(employee)
    ).join("")
    return `
    
    <html>
    <head>   
    </head>

       <body>
           <div>
               name: ${ manager.name }
               email: ${ manager.email }
               Office Number: ${ manager.officeNumber }           
           </div>
        ${employees}
       </body>
    </html>
    `
}

module.exports = { generatedInternHTML, generatedManagerHTML }