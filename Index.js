// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./develop/generatemarkdown');
 
// TODO: Create an array of questions for user input
const questions = [
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
        Validate: githubInput => {
            if(githubInput){
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw new Error(err);
        console.log("Readme Generated! Go to readme.md in the gen-readme folder to see it!")
    })
};

// TODO: Create a function to initialize app
function init() {
    console.log(`
    Welcome to the ReadMe Generator! 
    Answer the following question prompts to feed information to the generator.
    `
    );
    
    inquirer.prompt(questions)
    .then(readmeData => {
        //console.log(readmeData);
        writeToFile("./gen-readme/readme.md", generateMarkdown(readme))
    })
};

// Function call to initialize app
init();