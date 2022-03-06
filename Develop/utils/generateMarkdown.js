// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Shield](https://img.shields.io/badge/license-${license}-blue)`
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    switch (license) {
      case "MIT":
        return `[License](https://choosealicense.com/licenses/mit/)`;
      case "APACHE 2.0":
        return `[License](https://choosealicense.com/licenses/apache-2.0/)`;
      case "GPL 3.0":
        return `[License](https://choosealicense.com/licenses/gpl-3.0/)`;
      case "BSD 3":
        return `[License](https://choosealicense.com/licenses/bsd-3/)`;
        default:
          console.log(none);
    }
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `Project license is ${license}.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#command)
  - [Usage](#repo)
  - [Contributing](#contribute)
  - [Tests](#tests)

  ## Description
  ${data.description}
  ## Installation
  To install run ${data.command}
  ## Usage
  The usage info is: ${data.repo}
  ## Contributing
  To contribute to this project ${data.contribute}
  ## Tests
  To run tests ${data.tests}
  ## Questions
  For any questions please contact me at  
  Github: [${data.github}](https://github.com/${data.github})  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
