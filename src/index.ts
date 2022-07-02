#!/usr/bin/env node

import chalk from "chalk";
import boxen, { Options } from "boxen";
import { getStatusCodeInfo } from "./utils/getStatusCodeInfo";

const inputValue = process.argv[2];

const statusCodeInfo = getStatusCodeInfo(inputValue);

const boxenOptions: Options = {
 padding: 1,
 margin: 0,
 borderStyle: "singleDouble",
 borderColor: "magenta",
 backgroundColor: "#fff"
};

const responseTitle = `
------------------------------------------------------
  ${chalk.red('http-me')}: a quick HTTP status code lookup
------------------------------------------------------`

const responseFooter = `
------------------------------------------------------
`

const {group, statusCode, title, description, moreLink, specLink, deprecated, experimental} = statusCodeInfo ?? {}

// Handle no input
if (!inputValue) {
  console.log(`
  ${responseTitle}

  Please enter a search value, i.e. "${chalk.red('http-me 200')}". 
  ${responseFooter}
`
)
process.exit(0);
}

// Handle no results
if (!statusCodeInfo) {
  console.log(`${responseTitle}

  Uh-oh. No matches found for "${chalk.red(inputValue)}".
  
  ${chalk.italic('Maybe cats can help?')} ${chalk.underline('https://http.cat')}
${responseFooter}`
)
process.exit(0);
}

// Handle results
console.log(`
  ${responseTitle}

  Status Code: ${chalk.red(statusCode)}
  Title: ${chalk.red(title)}
  Group: ${chalk.red(group)}
  ${deprecated ? `Note: ${chalk.red(`!Deprecated!\n`)}` : experimental ? `Note: ${chalk.red(`!Experimental!\n`)}` : ''}
  Description:
  ${chalk.red(description)}

  Info: ${chalk.red(moreLink)}
  Spec: ${chalk.red(specLink)}
  ${responseFooter}`
)
