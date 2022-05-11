// TODO: Create a function that returns a license badge based on which license is passed in

const { emoji } = require("node-emoji");

// This lines create license badges.
function renderLicenseBadge(license) {
  // console.log(license);
  const badges = {
    "MIT": `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)`,
    "APACHE 2.0": `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)`,
    "GPL 3.0": `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)`,
    "BSD 3": `![GitHub license](https://img.shields.io/badge/license-${license.replace(" ", "")}-blue.svg)`,
    "None": ``
  }
      return badges[license];
  }


// TODO: Create a function that returns the license link
// These lines for license links.
function renderLicenseLink(license) {
const licenseLinks = {
  "MIT": `[MIT](https://choosealicense.com/licenses/mit/)`,
  "APACHE 2.0": `[APACHE 2.0](https://www.apache.org/licenses/LICENSE-2.0)`,
  "GPL 3.0": `[GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/)`,
  "BSD 3": `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`,
  "None": ``
}
return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If statement for none licnese case.
function renderLicenseSection(license) {
  if(license === 'None'){
    return 'This project does not have any license.';
  }else {
    return `This project is licensed under the ${renderLicenseLink(license)} license.`;
  }
}

// TODO: Create a function to generate markdown for README
// This lines creating MD file with user input, also \`\`\` section creates code blocks.
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
  \`\`\`
  ${answers.installation}
  \`\`\`
  ## Tests

  To run tests, run the following command:
  \`\`\`
  ${answers.tests}
  \`\`\`
  ## License

   ${renderLicenseSection(answers.license)} 

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).

`;
}

module.exports = generateMarkdown;

