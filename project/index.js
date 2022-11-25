
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { log } = require("util");

let renderLicenseBadge= ("badge")
let renderLicenseLink=("license")

// Array of questions to setup employees
const questions = [
  {
    type: "input",
    name: "title",
    email: "What is the employee email?",
    getName()
  },
  
  function init() {

  }