// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log(license);
  if (license === 'None') {
    return ''; // If user dont want any license returns none.
  }else {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)`
    }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// This lines creating MD file with user input.
function generateMarkdown(answers) {
  return `

  # **${answers.title}**

  ${renderLicenseBadge(answers.license)}

  ## Description 
  ${answers.description}

  ## Table of Content

  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Licence](#licence)
  * [Questions](#questions)

  ## Usage

  ${answers.usage}

  ## Contributing

  ${answers.contributing}

  ## Installation

  To install necessary dependencies, run the following command:

  ${answers.installation}

  ## Tests

  To run tests, run the following command:
  
  ${answers.tests}

  ## License

  This project  is licensed under the ${answers.license} license.

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).

`;
}

module.exports = generateMarkdown;