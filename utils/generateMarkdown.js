    const fs = require('fs')

    // Function that returns a license badge based on which license is passed in
    // If no license, return an empty string
    function renderLicenseBadge(license) {

        if (license === 'Apache') {
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)'
        } else if (license === 'MIT') {
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        } else if (license === 'BSD') {
            return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        } else if (license === 'GNU') {
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        } else if (license === 'Eclipse') {
            return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        } else if (license === 'IBM') {
            return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        } else if (license === 'none') {
            return ''
        }
    }

    // Function that returns the license link
    // If no license, return an empty string
    function renderLicenseLink(license) {

        if (license === 'Apache') {
            return 'https://www.apache.org/licenses/LICENSE-2.0'
        } else if (license === 'MIT') {
            return 'https://opensource.org/licenses/MIT'
        } else if (license === 'BSD') {
            return 'https://opensource.org/licenses/BSD-3-Clause'
        } else if (license === 'GNU') {
            return 'https://www.gnu.org/licenses/licenses.en.html'
        } else if (license === 'Eclipse') {
            return 'https://www.eclipse.org/legal/epl-2.0/'
        } else if (license === 'IBM') {
            return 'https://www-03.ibm.com/software/sla/sladb.nsf'
        } else if (license === 'none') {
            return ''
        }

    }

    // Function that returns the license section of README
    // If no license, return an empty string
    function renderLicenseSection(license) {

        let licenseMarkdown =
            `## License
    This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`

        if (license === 'none') {
            return ''
        } else {
            return licenseMarkdown
        }
    }

    // Function to generate markdown for README
    function generateMarkdown(data) {
        return `# ${data.title}

    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Credits](#credits) 
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ${renderLicenseSection(data.license)}

    ## Credits
    ${data.credits}

    ## Tests
    ${data.tests}

    ## Questions
    if you have questions about this project, visit [Github](https://github.com/${data.github})
    or email ${data.email}.
    `;
    }

    module.exports = generateMarkdown;
