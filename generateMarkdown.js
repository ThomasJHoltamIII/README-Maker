// Function to generate the license badge
function renderLicenseBadge(license) {
  if (license === "No License") {
    return "";
  }
  return `[![License Badge](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(
    license
  )})`;
}

// Function to give badge a link to the licenses description
function renderLicenseLink(license) {
  if (license === "No License") {
    return "";
  }
  return "https://opensource.org/licenses/" + license;
}

// Function to add description to License
function renderLicenseSection(license) {
  if (license === "No License") {
    return "This project has no license.";
  }
  return `${license} license information.`;
}

// Scaffold and Function to make README, this is passed to the Index.js
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    license,
    gitHubLink,
    email,
    tests,
    author,
  } = data;

  return `# ${title}
${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${author}

## License
${renderLicenseBadge(license)}
${renderLicenseSection(license)}

## Tests
${tests}

## Questions
If you have any questions, feel free to reach out:
- GitHub: https://github.com/${gitHubLink}
- Email: ${email}`;
}

// Export generateMarkdown to be used in index
module.exports = generateMarkdown;
