const inquirer = require('inquirer');
const fs = require('fs');

console.log('starting....')
const generateMarkdown = require('./utils/generateMarkdown');

// Use writeFileSync method to use promises instead of a callback function

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is your proyect\'s name?',

    validate: projectName_input => {
      if (projectName_input) {
        return true;
      } else {
        console.log("Please, enter project name to continue");
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project',
    validate: projectDescription_input => {
      if (projectDescription_input) {
        return true;
      } else {
        console.log("Please, enter project description to continue");
      }
    }
  },
  { 
  type: 'input',
  name: 'usage',
  message: 'What is the usage of your project',
  validate: projectUsage_input => {
    if (projectUsage_input) {
      return true;
    } else {
      console.log("Please, enter project usage to continue");
    }
  }
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'Why did you build this project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a licences to best cover your project ',
    choices: ['MIT','ISC', 'Apache-2.0', 'BSD-3-Clause', 'GPL 3.0','IPL-1.0','MPL-2.0', 'No License'],
    validate: projectlicense_input => {
      if (projectlicense_input) {
        return true;
      } else {
        console.log("Please, select a project licence to continue");
      }
    }
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who recives credits to contribute to your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project? ',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How test your project?',
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'What is your gitHub username? ',
    validate: projectgithub_input => {
      if (projectgithub_input) {
        return true;
      } else {
        console.log("Please, provide your gitHun username to continue");
      }
    }
  },
]


// using writeFileSync as a promise
function init(){
  console.log('ReadMe generator');
  inquirer.prompt(questions)
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
