let generatedEmployeeHTML = (array) => {
  
    return `
    
    <html>
    <head>
    
    </head>

       <body>
           <div>
               name: ${ array[0].name }
               email: ${array[0].email}

               name: ${ array[1].name }
               email: ${array[1].email}

             
           </div>

       </body>
    </html>
    `
}

module.exports = generatedEmployeeHTML