// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
// Readme questions.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type:'input',
        name:'description',
        message: 'Please write a short description of your project?'
    },
    {
        type:'input',
        name:'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type:'input',
        name:'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        type:'input',
        name:'installation',
        message: 'What command should be run to install dependencies? (npm i)' 
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
        message: 'What command should be run to run tests?  (npm test)'
    },
    {
        type:'list',
        name:'license',
        message: 'What kind of license should your project have?',
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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


// filter(val) {
//     return val.toLowerCase();
// }