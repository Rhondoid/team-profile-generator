const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./project/employee.js");
const Engineer = require("./project/engineer.js");
const Intern = require("./project/intern.js");
const Manager = require("./project/manager.js");

// Array of questions to setup employees
//make each individual question
let employeeQuestions = [
  {
    type: "input",
    message: "what is the employee's name?",
    name:"employeeName",
  }
  ,
  {
    type: "input",
    message: "what is the employee's id?",
    name:"id",
  }
  ,
  {
    type: "input",
    message: "what is the employee's email?",
    name:"email",
  }
  ,
  
  {
    type: "list",
    message: "What is the employee role?",
    name: "role",
    choices: ["Manager", "Employee", "Engineer", "Intern"]
  }

  //second questions list

];

let managerQuestions = [
  {
    type: "input",
    message: "what is the managers office number?",
    name:"officeNumber",
  }
  ]
let engineerQuestions = [
    {
      type: "input",
      message: "what is the engineer github?",
      name:"github",
    }
  ]
let internQuestions = [
      {
        type: "input",
        message: "what is the engineer github?",
        name:"github",
      }
  
  ];

function init() {
  inquirer
    .prompt(employeeQuestions)
    .then((inputResponses) => {
      // console.log(inputResponses.employeeQuestions);
      // let employeeName = newEmployee(
      //   employeeName,
      //   id,
      //   officeNumber,
      //   email,
      //   role
      // );
      if (inputResponses.role == "Manager"){
        askManagerQuestions(inputResponses);
      }
    //   fs.writeFileSync("./index.html", generatedString, function (err) {
    //     if (err) console.log(err);
    //     console.log("new employee added");
    //   });
    // })
    // .catch((err) => {
    //   console.log(err);
    });
}

  function askManagerQuestions(employeeData){
    inquirer
    .prompt(managerQuestions)
    .then((inputResponses) =>{
      console.log(inputResponses);
      
      const myManager = new Manager(employeeData.employeeName, employeeData.id, inputResponses.officeNumber,employeeData.email, employeeData.role) 
     console.log(myManager);
     //push manager object to list of employee,  or write to html doc
     continueQuestions();

    });
    
  }
function continueQuestions(){
  //ask user to continue questions or quit
  //if user wants to continue then or quit function
  init(); 
}
init();
