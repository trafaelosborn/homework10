let generatedInternHTML = (internArray) => {
  
    return `

        <div>
            name: ${ internArray[0].name }
            email: ${internArray[0].email}

           

            
        </div>
    `
}

let generatedManagerHTML = (array) => {
  
    return `
    
    <html>
    <head>
    
    </head>

       <body>
           <div>
               name: ${ array[0].name }
               email: ${array[0].email}

           

             
           </div>

       </body>
    </html>
    `
}

module.exports = { generatedInternHTML, generatedManagerHTML }