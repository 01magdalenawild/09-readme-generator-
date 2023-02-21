// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "MIT"){
    return "![MIT license](https://img.shields.io/badge/license-MIT-blue)"

} else if(license === "APACHE 2.0"){
    return "![APACHE 2.0 license](https://img.shields.io/badge/license-Apache%202.0-brightgreen)"
    
}
else {
    return ""
}

}

// TODO: Create a function that returns the license link
function renderLicenseLink(license){
    if (license !== "none"){
        return `* [Licenses](#licenses)`
    } else {
        return ""
    }
}
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
function renderLicenseSection(license){
    if (license !== "none"){
        return `
## Licenses
to learn more about ${license} visit [${license} Website](https://opensource.org/license/${license})
        `
    }
    else {
        return ""
    }
}
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README


// Generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.licenses)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
${renderLicenseLink(data.license)}

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions

    Have questions about this project?  
    GitHub: https://github.com/${data.creator}  
    Email: ${data.email}

## Credits
${data.name}

${renderLicenseSection(data.license)}
  `;
  }
  
  module.exports = generateMarkdown;