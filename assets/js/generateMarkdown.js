// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'None':
      return 'N/A';
      break;

    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;

    case 'GNU General Public License v3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;

    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;

    case 'BSD 2-Clause "Simplified" License':
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
      break;

    case 'Boost Software License 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      break;

    case 'Creative Commons Zero v1.0 Universal':
      return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
      break;

    case 'Eclipse Public License 2.0':
      return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
      break;

    case 'GNU Affero General Public License v3.0':
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
      break;

    case 'GNU General Public License v2.0':
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;

    case 'GNU Lesser General Public License v2.1':
      return '![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)';
      break;

    case 'Mozilla Public License v2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;

    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      break;

    default: return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'None':
      return 'N/A';
      break;

    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;

    case 'GNU General Public License v3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      break;

    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
      break;

    case 'BSD 2-Clause "Simplified" License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
      break;

    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
      break;

    case 'Creative Commons Zero v1.0 Universal':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;

    case 'Eclipse Public License 2.0':
      return 'https://opensource.org/licenses/EPL-1.0';
      break;

    case 'GNU Affero General Public License v3.0':
      return 'https://www.gnu.org/licenses/agpl-3.0';
      break;

    case 'GNU General Public License v2.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;

    case 'GNU Lesser General Public License v2.1':
      return 'https://www.gnu.org/licenses/lgpl-2.1';
      break;

    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
      break;

    case 'The Unlicense':
      return 'http://unlicense.org/';
      break;

    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length == 0) return '';
  return `${renderLicenseBadge(license)}

  License Link: ${renderLicenseLink(license)}`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (!data || data.length === 0) {
    return '';
  }

  return `# ${data.title}    

  ## Description
  ${data.description}
  
  
  ## Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How To Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
         
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## How To Contribute
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please here is my contact info:

  GitHub: ${data.github}

  Email: ${data.email}`;
}

module.exports = { generateMarkdown };