#!/usr/bin/env bun

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).version(
  "--version",
  "Show version number",
  "0.10.0",
).argv;

const msg = argv.msg;
console.log(msg);
