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
function generateMarkdown(data) {
return `
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation
${data.install}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.testing}
## Questions?
Questions or concerns? Email me at <${data.email}>. </br>
Or find me on GitHub: [${data.github}](https://github.com/${data.github})
`;
}

//export the Markdown
module.exports = generateMarkdown;
