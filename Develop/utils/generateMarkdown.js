// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

function renderLicenseBadge(licenseType) {
  console.log(licenseType);
 // let licenseType = `${data.license}`
    if (licenseType === "None") {
    return ""
  } else if (licenseType === "Apache 2.0") {
    let licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    return licenseBadge  
  } else if (licenseType === "GNU GPL v3") {
    let licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    return licenseBadge
  } else if (licenseType === "MIT") {
    let licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    return licenseBadge
  } else if (licenseType === "zLib") {
    let licenseBadge = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
    return licenseBadge
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  
  ## License Badge
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents 
  [${data.table_contents[0]}](#installation)\n
  [${data.table_contents[1]}](#usage)\n
  [${data.table_contents[2]}](#license)\n
  [${data.table_contents[3]}](#contributing)\n
  [${data.table_contents[4]}](#tests)\n
  [${data.table_contents[5]}](#questions)\n
  
  <a name="installation"></a>
  ## Installation 
  ${data.installation}
  
  <a name="usage"></a> 
  ## Usage
  ${data.usage}
  
  <a name="license"></a> 
  ## License 
  The license in use for this application is ${data.license}. 
  
  <a name="contributing"></a> 
  ## Contributing
  ${data.contributing}
  
  <a name="tests"></a> 
  ## Tests 
  ${data.tests}
  
  <a name="questions"></a> 
  ## Questions 
  If you have questions, please contact:\n
  GitHub: <https:////github.com/${data.username}>\n
  Email: ${data.email}`
};

module.exports = generateMarkdown;
