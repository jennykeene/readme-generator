// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //imports Inquirer library here
const fs = require('fs'); //imports File System here

// imports generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown'); 

/* One Inquirer method: 
inquirer.prompt(questions, answers) -> promise...
* questions = array containing Question Object
* answers = object; contains values of already answered questions
*/

// TODO: Create an array of questions for user input
const readmeInfo = () => {
    return inquirer.prompt([ //start of Question Object
        //title of project
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project?',
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
        //github username
        {
            type: 'input',
            name: 'github',
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
        //email address
        {
            type: 'input',
            name: 'email',
            message: 'What email address can GitHub users contact you at?',
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
.then(data => {
    return generateMarkdown(data);
})
.then(data => {
    return writeFile(data);
})
