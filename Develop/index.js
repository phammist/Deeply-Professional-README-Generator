const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const project = {
  type: "input",
  name: "project",
  message: "What is the project name?",
};

const description = {
  type: "prompt",
  name: "description",
  message: "Please add a description for the project",
};

const license = {
  type: "list",
  name: "license",
  message: "What license are you using?",
  choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
};

const installation = {
  type: "input",
  name: "installation",
  message: "What are the initialization instructions?",
  default: "npm i",
};

const test = {
  type: "input",
  name: "test",
  message: "How do you test your code?",
  default: "npm test",
};

const info = {
  type: "input",
  name: "info",
  message: "What does the user need to know about using the repo?",
};

const contributions = {
  type: "input",
  name: "contributions",
  message: "How can someone contribute to the repo?",
};

const githubName = {
  type: "input",
  name: "githubName",
  message: "What is your Github name for any user questions?",
};

const email = {
  type: "input",
  name: "email",
  message: "What is the best email to reach you?",
};

const questions = [
  project,
  description,
  license,
  installation,
  test,
  info,
  contributions,
  githubName,
  email,
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), "README.md"), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

init();
