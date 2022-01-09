function generateMarkdown(data) {
return `
![badge](https://img.shields.io/badge/License-${data.license}-blue)  

# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation
${data.install}
## Usage
${data.usage}
## License
${data.license}
## Contribution
${data.contribution}
## Tests
${data.testing}
## Questions
Questions or concerns? Email me at <${data.email}>. </br>
Or find me on GitHub: [${data.github}](https://github.com/${data.github})
`;
}

//export the Markdown
module.exports = generateMarkdown;
