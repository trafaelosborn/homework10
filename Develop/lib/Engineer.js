count = 1

class Engineer {
    constructor (name, email, github) {
        this.name = name
        this.id = count++
        this.email = email
        this.github = github
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

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;