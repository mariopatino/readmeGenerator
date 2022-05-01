    // TODO: Create a function that returns a license badge based on which license is passed in
  // ! If there is no license, return an empty string
  function renderLicenseBadge(license) {
    if (license != "No License") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return ``;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license != "No License"){
      return `\n  * [License](#license)\n`
    }
    return ``;
  }
  
  // Function to get the URL of the user's selected license
  function renderLicenseURL(license){
    if(license != 'No License'){
      if(license === "GPL 3.0"){
        return "https://www.gnu.org/licenses/gpl-3.0"
      }else{
        return `"https://opensource.org/licenses/${license}"`
      }     
    }
      return '';
  }
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    return (license ? `  
    ## License 
    This project is license under the ${renderLicenseURL(license)}` : ``);
  }



function generateMarkdown (data){
    return `# **${data.projectName}**

${renderLicenseBadge(data.license)}
## Description
${data.description}

   
## Table of Contents
* [Description](#description)
* [Motivation](#motivation)
* [Usage](#usage)
${renderLicenseSection(data.license)}
* [Contributor](#contributor)
* [Installation](#installation)
* [Tests](#tests)
* [Contact](#contact)


## Description
    ${data.description}

## Motivation
    ${data.motivation}

## Usage
    ${data.usage}

## Contributor
    ${data.credits}

## License
    ${data.license}

## Installation
    ${data.installation}

## Test
    ${data.test}

## Autor
    For any question or inquiery
* GitHub: [${data.gitHub}](https://github.com/${data.gitHub})

    `
};

module.exports = generateMarkdown;
