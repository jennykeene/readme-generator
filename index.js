// TODO: Include packages needed for this application
// bring inquirer lib into this file
const inquirer = require('inquirer');
const fs = require('fs');
// reference generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const readmeInfo = () => {
    return inquirer.prompt(
        //github username
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username?',
            //validate user's input
            validate: githubNameInput => {
                if (githubNameInput) {
                    return true;
                } else {
                    console.log('Your GitHub username is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        },
        //Installation Instructions
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        },
        //Usage Info
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        },
        //License
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        },
        //Contribution Guidelines
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        },
        //Test Instructions
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        },
        //Questions
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        },
        //github profile link
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        },
        //email address
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        }
)};


// TODO: Create a function to write README file

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err)
                return;
            }

            resolve({
                ok: true,
                message: 'Readme file created!'
            });
        });
    }) 
};

module.exports = { writeFile };

// TODO: Create a function to initialize app
function init() {
    readmeInfo()
        .then(data)
};


// Function call to initialize app
init();
