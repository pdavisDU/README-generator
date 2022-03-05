// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generate = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a short description of your project"
    },
    {
        type: "list",
        name: "license",
        message: "What is the license?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "command",
        message: "What command should be run to install dependencies?",
        default: ["npm i"]
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: ["npm test"]
    },
    {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?"
    }
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, (err) => {
        err ? console.error(err) : console.log('file has been written');
    });
}
console.log(writeToFile);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
