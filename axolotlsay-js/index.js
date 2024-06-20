#! /usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).version(
  "--version",
  "Show version number",
  "0.6.0",
).argv;

const msg = argv.msg;
console.log(msg);
