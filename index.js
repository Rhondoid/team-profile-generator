
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const employee = require("./project/employee.js");
const engineer = require("./project/engineer.js");
const intern = require("./project/intern.js");
const manager = require("./project/manager.js");

// Array of questions to setup employees

let employee = [
  {
    type: "list",
    employeeName:"what is the employee's name?",
    id: "What is the employee's id" 
    email:"What is the employee email?",
    role: "What role should the employee have?",
    
    
  }],
  
  function init() {

  }