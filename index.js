// TODO: Include packages needed for this application
const inquirer = require('inquirer');
console.log('something');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type:'input',
        name:'description',
        message: 'Project description?'
    },
    {
        type:'input',
        name:'installation',
        message: 'Installation instructions?'
    },
    {
        type:'input',
        name:'usage',
        message: 'Project usage?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();