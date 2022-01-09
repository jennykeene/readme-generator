// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //imports Inquirer library here
const fs = require('fs'); //imports File System here

// imports generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown'); 

/* One Inquirer method: 
inquirer.prompt(questions, answers) -> promise...
* questions = array containing Question Object
* answers = object; contains values of already answered questions

Question Object:
* type (default is input)
* name
* messages
* choices
* validate
* filter

Answers: 
A key/value hash containing user answers from each prompt
* key = 'name' property of Question Object
* value = 'input' or 'confirm'

*/

// TODO: Create an array of questions for user input
const readmeInfo = () => {
    return inquirer.prompt([ //start of Question Object
        //github username
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username?',
            //validate user's input
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Your GitHub username is required');
                    return false;
                }
            }
        },
        //Description
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your Project',
        },
        //Installation Instructions
        {
            type: 'input',
            name: 'install',
            message: 'Enter instructions on how to install your Project',
        },
        //Usage Info
        {
            type: 'input',
            name: 'usage',
            message: 'Provide information on how someone can use this Project',
        },
        //License
        {
            type: 'list',
            name: 'license',
            message: 'Provide the licensing for your Project',
            choices: ["MIT","GNU", "None"],
        },
        //Contribution Guidelines
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidelines for your Project',
        },
        //Test Instructions
        {
            type: 'input',
            name: 'testing',
            message: 'Provide test instructions for your Project',
        },
        //Questions
        {
            type: 'input',
            name: 'questions',
            message: 'Provide contact info for questions',
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
    ]); //end of Question Object
};

// TODO: Create a function to write README file
const writeFile = data => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err)
                return;
            }

            resolve({
                ok: true,
                message: 'Readme file created!' //let's user know if input successful
            });
        });
    }) 
};

// call the function to start the user prompts
readmeInfo() 
.then(answers => {
    return generateMarkdown(answers);
})
.then(data => {
    return writeFile(data);
})

// TODO: Create a function to initialize app
function init() {

};


// Function call to initialize app
init();
