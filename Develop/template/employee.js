let generatedInternHTML = (internArray) => {
  
    return `

        <div>
            name: ${ internArray[0].name }
            email: ${internArray[0].email}

            name: ${ internArray[1].name }
            email: ${internArray[1].email}

            
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

               name: ${ array[1].name }
               email: ${array[1].email}

             
           </div>

       </body>
    </html>
    `
}

module.exports = { generatedInternHTML, generatedManagerHTML }