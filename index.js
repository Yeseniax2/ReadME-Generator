const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const makeMarkdown = require("./markdownFormatter");

var prompts = [
    {
        type: "input",
        name: "title",
        message: "what is the title of the project?",
    }
    {
        name: "installCmd",
        message: "what is the install command?"
        default: "npm i",
    
    }]