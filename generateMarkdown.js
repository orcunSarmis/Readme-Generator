// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {

//   const badges = {
//     MIT: '',
//     APACHE 2.0: '',
//     GPL 3.0: '',
//     BSD 3: '',
//     None: ''

//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {

//   const licenseLink = {
//     MIT: '',
//     APACHE 2.0: '',
//     GPL 3.0: '',
//     BSD 3: '',
//     None: ''
    
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `

  # **${answers.title}**

  ![GitHub](https://img.shields.io/badge/<LABEL>-${answers.license}-<COLOR>)

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