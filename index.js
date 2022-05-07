// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')
const fs = require('fs');
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
    {
        type:'input',
        name:'contributing',
        message: 'Contributing guidelines information?'
    },
    {
        type:'input',
        name:'email',
        message: 'Your email?'
    },
    {
        type:'input',
        name:'github',
        message: 'Your Github username?'
    },
    {
        type:'input',
        name:'tests',
        message: 'Tests?'
    },
    {
        type:'list',
        name:'license',
        message: 'Please choose a license?',
        choices:['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    }
];



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

function askToUser() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const md = generateMarkdown(answers);

        // TODO: Create a function to write README file
        fs.writeFile('README.md', md, function(err) {
            if (err) {
                console.log('Could not save file.', err);
            } else {
                console.log('Success: new README.md file generated inside the current folder.');
            }
        }); 
        {
        }

        console.log(md);
        return answers
    })
    .catch((error) => {
        console.log(error)
    })
}
askToUser();