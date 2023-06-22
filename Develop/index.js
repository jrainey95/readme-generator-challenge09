// TODO: Include packages needed for this application
// varaibles for modules
const path = require('path')
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generate');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What's your github link!",
  },
  {
    type: "input",
    name: "email",
    message: "give ME YOUR EMAIL?",
  },
  {
    type: "input",
    name: "title",
    message: "project title?",
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?'

  },
  {
    type: 'input',
    name: 'usage',
    message: 'The user will find a beautiful functional project'
  },
  {
    type: "input",
    name: "description",
    message: "Short Description!",
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {}
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating ReadME.....');
    writeToFile("README.md", generateMarkdown({...inquirerResponses }));
  })
// Function call to initialize app
init();
