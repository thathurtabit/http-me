#!/usr/bin/env node

import chalk from "chalk";
import { getStatusCodeInfo } from "./utils/getStatusCodeInfo";
import { getCategoryColor } from './utils/getCategoryColor';

const inputValue = process.argv[2];

const statusCodeInfo = getStatusCodeInfo(inputValue);

const {category: group, statusCode, title, description, moreLink, specLink, deprecated, experimental} = statusCodeInfo ?? {}

const responseTitle = `
------------------------------------------------------
  ${getCategoryColor('http-me', group)}: a quick HTTP status code lookup
------------------------------------------------------`

const responseFooter = `
------------------------------------------------------
`

// Handle no input
if (!inputValue) {
  console.log(`
  ${responseTitle}

  Please enter a search value, i.e.:
  "${chalk.blue('http-me 200')}" or "${chalk.blue(`http-me bad gateway`)}". 
  ${responseFooter}
`
)
process.exit(0);
}

// Handle no results
if (!statusCodeInfo) {
  console.log(`${responseTitle}

  Uh-oh. No matches found for "${chalk.red(inputValue)}".
  
  ${chalk.italic('Maybe cats can help?')} ${chalk.blue.underline('https://http.cat')}
${responseFooter}`
)
process.exit(0);
}

// Handle results
console.log(`
  ${responseTitle}

  ${chalk.bold('Status Code')}: ${getCategoryColor(statusCode, group)}
  ${chalk.bold('Title')}: ${getCategoryColor(title, group)}
  ${chalk.bold('Category')}: ${getCategoryColor(group, group)}
  ${deprecated ? `${chalk.bold('Note')}: ${chalk.red(`!Deprecated!\n`)}` : experimental ? `${chalk.bold('Note')}: ${chalk.red(`!Experimental!\n`)}` : ''}
  ${chalk.bold('Description')}:
  ${getCategoryColor(description, group)};

  ${chalk.bold('Info')}: ${getCategoryColor(moreLink, group)}
  ${chalk.bold('Spec')}: ${getCategoryColor(specLink, group)}
  ${responseFooter}`
)
