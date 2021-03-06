let count = 3 

class Manager {
    constructor (name, email, officeNumber) {
        this.name = name
        this.id = count++
        this.email = email
        this.officeNumber = officeNumber
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

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;