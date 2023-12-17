// Data pulled from other sources that are used in this page
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// Function to take data from the generateMarkdown import and the user input to write the file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => (err ? console.log(err) : console.log('Nice!')));
}

// User question to be answered in command line
function init() {
  const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Do you have installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is this project used?',
      },
      {
          type: 'list',
          name: 'license',
          message: 'Choose a license for your project:',
          choices: [
            'MIT',
            'GNU GPLv3',
            'Apache 2.0',
            'ISC',
            'BSD 3-Clause',
            'No License',
          ],
        },
      {
        type: 'input',
        name: 'gitHubLink',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
      },
      {
          type: 'input',
          name: 'tests',
          message: 'How can you test your application?',
        },
      {
          type: 'input',
          name: 'author',
          message: 'Please name who contributed, add a comma after names if multiple',
        },
    ]
    // Fead response data back into the Generate Markdown import
  inquirer.prompt(questions).then((response) => {
    const markdown = generateMarkdown(response);
    // Pass the data over to writeToFile to generate the README.md
    writeToFile('README.md', markdown);
  });
}
// Fire function housing questions
init();

