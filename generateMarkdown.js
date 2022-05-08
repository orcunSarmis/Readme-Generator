// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `

  # **${answers.title}**

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

  ${answers.installation}

  ## Tests

  ${answers.tests}

  ## License

  This project  is licensed under the ${answers.license} license.

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. you can find more of my work at ${answers.github}.

`;
}

module.exports = generateMarkdown;