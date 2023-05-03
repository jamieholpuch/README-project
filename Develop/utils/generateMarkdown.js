// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseType = `${data.license}`
  let yourLicense = ""
  if (licenseType = "None") {
    return ""
  } else if (licenseType = "Apache 2.0") {
    yourLicense = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(yourLicense)}

  ## Description
  ${data.description}
  
  ## Table of Contents 
  ${data.table_contents}
  
  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License 
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests 
  ${data.tests}
  
  ## Questions 
  If you have questions, please contact:
  ${data.username}
  
  ${data.email}`
};


module.exports = generateMarkdown;
