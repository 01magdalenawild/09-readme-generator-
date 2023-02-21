const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule()
const fs = require("fs")
const path = require("path")
const readmemaker = require("./readmemaker")



// questions
const questions = [
    {

        type: "input",
        name: "title",
        message: "Name of project",
    },

    {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionity of this project",
    },
    {
        type: "list",
        name: "license",
        message: "Please  select a license applicable to this project",
        choices: ["MIT", "APACHE 2.0", "Boost1.0", "MPL2.0", "none"]
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technology used in this project",
    },

    {
        type: "input",
        name: "installation",
        message: "State the installation commands",
    },
    {
        type: "input",
        name: "tests",
        message: "State the test commands",
    },
    {
        type: "input",
        name: "creator",
        message: "Github username",
    },
    {
        type: "input",
        name: "contributing",
        message: "list contributers",
    },


    {
        type: "input",
        name: "name",
        message: "State your full name",
    },
    {
        type: "input",
        name: "email",
        message: "provide a valid email adress",
    }]

    prompt(questions).then(answers => {
        return readmemaker(answers)
    }).then(readmestring => {
        fs.writeFileSync(path.join(__dirname, "/samples/", "README.md"), readmestring)
    })






























