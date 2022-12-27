const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

const html = require("./dist/index.js");
// const myTeam = require("./dist/index.js")
// let newTeam = "data"
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
    choices: ["Employee", "Engineer", "Intern", "Manager", "none"],
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
    .prompt([...choiceQuestion])
    .then((inputResponses) => {
    
      if (inputResponses.role =="Employee"){
        askGeneralQuestions();
      }
       else if(inputResponses.role == "Engineer") {
        askEngineerQuestions();
      } else if (inputResponses.role === "Intern") {
        askInternQuestions();
      }else if (inputResponses.role ==="Manager"){
        askManagerQuestions();
      } else if (inputResponses.role === "none") {
        generateHTML()
      }
    });
  }
  function askGeneralQuestions() {
    inquirer
      .prompt(...askGeneralQuestions)
      .then((inputResponses) => {
        
        let myEmployee = new Employee(
          inputResponses.employeeName,
          inputResponses.id,
          inputResponses.email
        );
        allData.push(myEmployee);
       //console.log(myEmployee); 
        init()
      })
}  
  function askInternQuestions() {
    inquirer
      .prompt([...generalQuestions, ...internQuestions])
      .then((inputResponses) => {
        
        let myIntern = new Intern(
          inputResponses.employeeName,
          inputResponses.id,
          inputResponses.school,
          inputResponses.email
        );
        allData.push(myIntern);
        // console.log(myIntern); 
        init()
      });
  }

function askEngineerQuestions() {
  inquirer
    .prompt([...generalQuestions, ...engineerQuestions])
    .then((inputResponses) => {
      console.log(inputResponses);
      const myEngineer = new Engineer(
        inputResponses.employeeName,
        inputResponses.id,
        inputResponses.github,
        inputResponses.email
      );
      allData.push(myEngineer);
      // console.log(myEngineer);
      init()
    });
}
function askManagerQuestions() {
  inquirer
    .prompt([...generalQuestions, ...managerQuestions])
    .then((inputResponses) => {
      console.log(inputResponses);
      const myManager = new Manager(
        inputResponses.employeeName,
        inputResponses.id,
        inputResponses.officeNumber,
        inputResponses.email
      );
      allData.push(myManager);
      // console.log(myManager);
      init()
    });
  }

// {
//   html;
// }

// html.prototype.read = function (file) {
//   return fs.readFileSync(file, "UTF-8");
// };

// html.prototype.write = function (path, data) {
//   return fs.writeFileSync(path, data);
// };

// html.prototype.append = function (file, data) {
//   return fs.appendFileSync(file, data);
// };

// module.exports = newTeam;
function generateHTML(){
  console.log(allData)
//format data to render to html
//insert data into html, then return that value 
//fs.writeFileSync, save as index.html
}
init();
