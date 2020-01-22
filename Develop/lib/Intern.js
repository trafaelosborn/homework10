let count = 4 

class Intern {
    constructor (name, email, school) {
        this.name = name
        this.id = count++
        this.email = email
        this.school = school
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

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;