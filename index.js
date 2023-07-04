// TODO: Include packages needed for this application
const generateMarkdown = require('./assets/js/generateMarkdown');
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email? ",
        name: "email",
    },
    {
        type: "input",
        message: "Please input the title of your project. ",
        name: 'title',
    },
    {
        type: "input",
        message: "Please provide a short description explaining the what, why, and how of your project. ",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required to install your project? ",
        name: "installation",
    },
    {
        type:"input",
        message: "Provide usage instructions and examples for use. ",
        name: "usage",
    },
    {
        type:"input",
        message: "Please include paths to usage screenshots. ",
        name: "screenshot",
    },
    {
        type: "list",
        message: "Please provide the license(s) used.",
        name: "license",
        choices: 
        [
            'Apache License 2.0', 
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License v2.0',
            'The Unlicense'
        ],
    },
    {
        type:"input",
        message: `If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.`,
        name: 'contribution'
    },
    {
        type: "input",
        message: `Go the extra mile and write tests for your application. Then provide examples on how to run them here. `,
        name: 'test',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();