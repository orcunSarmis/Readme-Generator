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

  ## Table of Content
  * [Project description](#Description)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Installation](#Installation)
  * [Contact](#Contact)
  * [Licence](#Licence)

  # **Title** 
  ${answers.title}

  ## Description 
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contribution
  ${answers.contributing}

  ## Email
  ${answers.email}

  ## Github
  ${answers.github}

  ## Tests
  ${answers.tests}

  ## License
  ${answers.license}
`;
}

module.exports = generateMarkdown;