#!/usr/bin/env node

import chalk from "chalk";
import boxen, { Options } from "boxen";

const inputValue = process.argv[2];

const greeting = chalk.white.bold(`Hello! ${inputValue}`);

const boxenOptions: Options = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);