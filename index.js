// Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your projects title')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else
                console.log('Please enter a description of your project')
                return false
            }
        },
        {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and samples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true
            } else {
                console.log('Please enter usage information')
                return false
            }
        }
    },
{
    type: 'list',
    name:'license',
    message: 'What kind of license do you have for this project?',
    choices: ['Apache', 'MIT', 'BSD', 'GNU', 'Eclipse', 'IBM', 'none']
},
{
    type: 'input',
    name: 'credit',
    message: 'Who contributed to this project? (Required)',
    validate: creditInput => {
        if (creditInput) {
            return true
        } else {
            console.log('Please enter contributor information')
            return false
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Please write tests for your applications and examples of how to run.'
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your github username'
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email'
},
    ])
    .then(data => {
        return generateMarkdown(data)
    })

//function to write README file
.then( 
    function(data) {
        fs.writeToFile('/dist/readme.md', data, err => {
            if (err){
                return console.log(err)
            }
            console.log( 'SUCCESS!! Look in the dist folder to view your professional readme.md')
        })

    }
)
}
questions()



// Create a function to initialize app
function init() {}

// Function call to initialize app
init();
