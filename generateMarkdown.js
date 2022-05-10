// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log(license);
  const badges = {
    "MIT": `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)(https://choosealicense.com/licenses/mit/)`,
    "APACHE 2.0": `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)(https://www.apache.org/licenses/LICENSE-2.0)`,
    "GPL 3.0": `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)(https://choosealicense.com/licenses/gpl-3.0/)`,
    "BSD 3": `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)(https://opensource.org/licenses/BSD-3-Clause)`
  }

      return badges[license];
  // if (license === 'None') {
  //   return ''; // If user dont want any license returns none.
  // }else {
  //   return `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)`
  //   }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
const licenseLinks = {
  mit: `[MIT](https://choosealicense.com/licenses/mit/)`,
  apache2: `[APACHE 2.0]((https://www.apache.org/licenses/LICENSE-2.0))`,
  gpl3: `[GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/)`,
  bsd3: `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `${renderLicenseLink(license)}`
  }else {
    return '';
  }
}

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
  * [Licence](#license)
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

  This project is licensed under the ${answers.license} license.

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).

`;
}

module.exports = generateMarkdown;

// ${renderLicenseBadge(answers.license)}

// ${this.renderLicenseBadge(answers.license)}

// ${renderLicenseBadge(answers.license)}