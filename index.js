const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

let allData = [];

// Array of questions to setup employees
//make each individual question
let generalQuestions = [
  {
    type: "input",
    message: "what is the employee's name?",
    name: "employeeName",
  },
  {
    type: "input",
    message: "what is the employee's id?",
    name: "id",
  },
  {
    type: "input",
    message: "what is the employee's email?",
    name: "email",
  },

  //second questions list
];
let choiceQuestion = [
  {
    type: "list",
    message: "What is the employee role?",
    name: "role",
    choices: ["Engineer", "Intern", "none"],
  },
];

let managerQuestions = [
  {
    type: "input",
    message: "what is the managers office number?",
    name: "officeNumber",
  },
];
let engineerQuestions = [
  {
    type: "input",
    message: "what is the engineer github?",
    name: "github",
  },
];
let internQuestions = [
  {
    type: "input",
    message: "what is the interns school?",
    name: "school",
  },
];

function init() {
  inquirer
    .prompt([...generalQuestions, ...managerQuestions, ...choiceQuestion])
    .then((inputResponses) => {
      const myManager = new Manager(
        inputResponses.employeeName,
        inputResponses.id,
        inputResponses.officeNumber,
        inputResponses.email
      );
      allData.push(myManager);
      console.log(myManager);
      if (inputResponses.role == "Engineer") {
        askEngineerQuestions();
      } else if (inputResponses.role === "Intern") {
        askInternQuestions();
      } else if (inputResponses.role === "None") {
      }
    });
  function askInternQuestions() {
    inquirer
      .prompt([...generalQuestions, ...internQuestions, ...choiceQuestion])
      .then((answers) => {
        console.log(answers);
        let myIntern = new Intern(
          answers.employeeName,
          inputResponses.id,
          inputResponses.school,
          inputResponses.email
        );
        allData.push(myIntern);
        console.log(myIntern);
      });
  }
}

function askEngineerQuestions() {
  inquirer
    .prompt([...generalQuestions, ...engineerQuestions, ...choiceQuestion])
    .then((inputResponses) => {
      console.log(inputResponses);
      const myEngineer = new Engineer(
        inputResponses.employeeName,
        inputResponses.id,
        inputResponses.github,
        inputResponses.email
      );
      allData.push(myEngineer);
      console.log(myEngineer);
    });
}
init();
