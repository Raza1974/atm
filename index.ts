#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 50000;
let myPin = 98786;
let pinAns = await inquirer.prompt(
    {
    name: "pincode",
    type: "number",
    message: "Enter your PIN."
    }
    )
    if (pinAns.pincode === myPin) {
    console.log(chalk.bold.yellowBright("Welcome to your account!"));
    
    let actionAns = await inquirer.prompt(
    {
    name: "action",
    message: (chalk.bold.greenBright("Please choose an option")),
    type: "list",
    choices: ["Check Balance", "Withdraw", "FastCash"]
    }
    )
    if (actionAns.action === "Check Balance") {
    console.log(chalk.yellow(`Your Current balance is: ${myBalance}`));
    
    } else if (actionAns.action === "Withdraw") {
    let WithdrawAmount = await inquirer.prompt({
    name: "amount",
    type: "number",
    message: (chalk.greenBright("How much would you like to withdraw ?"))
    }) 
    
    //  myBalance -= WithdrawAmount.amount
    if (WithdrawAmount.amount < myBalance) {
    myBalance -= WithdrawAmount.amount,
    console.log(chalk.blueBright(`Your remaninig balance is: ${myBalance}`));
    
    } else if (WithdrawAmount.amount > myBalance) {
    console.log(chalk.bold.redBright(`Unable to Process Transaction!\nYour current balance is ${myBalance}`));
    
    }
    
    } else if (actionAns.action === "FastCash") {
    let cashAmount = await inquirer.prompt ({
    name: "cash",
    type:  "rawlist",
    message: "Choose your account!",
    choices: ["1000", "2000", "5000", "10000"]
    })
    myBalance -= cashAmount.cash;
    console.log(chalk.bold.blueBright(`Your remainig balance is: ${myBalance}`));
    
    }
    
    } else if (pinAns.pincode !== myPin){
    console.log(chalk.underline.red("Incorrect PIN! Please try again."));
    
    }