// TODO: Include packages needed for this application
// bring inquirer lib into this file
const inquirer = require('inquirer');
// reference generateMarkdown.js file
const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const userInfo = () => {
    return inquirer.prompt([
        //begin questions array

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
        }
        //github profile link

        //email address
    ])
};

const readmeInfo = () => {
    return inquirer.prompt ([
        //Description
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
            validate: descriptInput => {
                if (descriptInput) { 
                    return true;
                } else {
                    console.log('Project description is required');
                    return false;
                }
            }
        }
        //Installation Instructions

        //Usage Info

        //License

        //Contribution Guidelines

        //Test Instructions

        //Questions
    ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
