#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellowBright("\n\t\t\t\t========================================================================"));
console.log(chalk.bold.yellowBright("\n\t\t\t\t******************* CONDUCTING DATA FOR MARKSHEET **********************"));
console.log(chalk.bold.yellowBright("\n\t\t\t\t========================================================================"));
let user_info = await inquirer.prompt([
    {
        name: "Name",
        type: "string",
        message: chalk.bold.greenBright("\n\t\t\t\tEnter your name: "),
    },
    {
        name: "RollNumber",
        type: "number",
        message: chalk.bold.greenBright("\n\t\t\t\tEnter your Roll Number range between 1 to 50: "),
    }
]);
user_info;
let user_input = await inquirer.prompt([
    {
        name: "english",
        type: "number",
        message: chalk.bold.blue("\n\t\t\t\tENTER YOUR ENGLISH NUMBER BETWEEN 1 TO 100: "),
    },
    {
        name: "maths",
        type: "number",
        message: chalk.bold.blue("\n\t\t\t\tENTER YOUR MATH'S NUMBER BETWEEN 1 TO 100: "),
    },
    {
        name: "science",
        type: "number",
        message: chalk.bold.blue("\n\t\t\t\tENTER YOUR SCIENCE NUMBER BETWEEN 1 TO 100: "),
    }
]);
user_input;
console.log(chalk.bold.yellow("\n\t\t\t\t========================================================================="));
const totalMarks = user_input.english + user_input.maths + user_input.science;
const percentage = (totalMarks / 300) * 100;
console.log(chalk.bold.yellow("\n\t\t\t\t========================================================================="));
console.log(chalk.bold.yellow("\n\t\t\t\t****************************** MARKSHEET ********************************"));
console.log(chalk.bold.yellow("\n\t\t\t\t========================================================================="));
console.log(chalk.bold.yellow("\n\t\t\t\tName: " + user_info.Name));
console.log(chalk.bold.yellow("\n\t\t\t\tRoll Number: " + user_info.RollNumber));
console.log(chalk.bold.yellow("\n\t\t\t\t========================================================================="));
console.log(chalk.bold.yellow("\n\t\t\t\tEnglish: " + user_input.english));
console.log(chalk.bold.yellow("\n\t\t\t\tMaths: " + user_input.maths));
console.log(chalk.bold.yellow("\n\t\t\t\tScience: " + user_input.science));
console.log(chalk.bold.yellow("\n\t\t\t\tTotal Marks: " + totalMarks));
console.log(chalk.bold.green("\n\t\t\t\tPercentage: " + percentage.toFixed(2) + "%"));
console.log(chalk.bold.yellow("\n\t\t\t\t========================================================================="));
