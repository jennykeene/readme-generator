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
# Title of Project
${data.title}
## Description
${data.description}
## Table of Contents
* Installation
* Usage
* Contributors
* Tests
* Questions
## Installation
${data.install}
## Usage
${data.usage}
## Contributors
${data.contribution}
## Tests
${data.testing}
## Questions?
Questions or concerns? Email me at ${data.email}.
`;
}

//export the Markdown
module.exports = generateMarkdown;
