// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
 
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();