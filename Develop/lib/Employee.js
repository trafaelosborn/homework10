let count = 1 
class Employee {
    
    constructor (name,   email) {
        this.name = name
        this.id = count++
        this.email = email
     
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "employee"
    }
}

 

module.exports = Employee;