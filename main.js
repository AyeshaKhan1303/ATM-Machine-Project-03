#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; // Dollar
let mypin = 1303;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter Your PIN Code",
        type: "number",
    }
]);
if (pinAnswer.Pin === mypin) {
    console.log("Correct PIN Code!");
    let optionAnswer = await inquirer.prompt([
        {
            name: "operations",
            message: " Please Select Option",
            type: "list",
            choices: ["Balance Inquirry", "Fast Withdrawal", "Cash Withdrawal"]
        }
    ]);
    if (optionAnswer.operations === "Balance Inquirry") {
        console.log(myBalance);
    }
    else if (optionAnswer.operations === "Fast Withdrawal") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "Amount",
                message: "Please Select Amount",
                type: "list",
                choices: [1000, 5000, 10000, 15000, 25000]
            }
        ]);
        // -=
        myBalance -= amountAnswer.Amount;
        console.log(`Your remaining balance is : ${myBalance}`);
    }
    else if (optionAnswer.operations === "Cash Withdrawal") {
        let CashAnswer = await inquirer.prompt([
            {
                name: "Cash",
                message: "Please Enter Amount",
                type: "number",
            }
        ]);
        // -=
        myBalance -= CashAnswer.Cash;
        console.log(`Your remaining balance is : ${myBalance}`);
    }
}
else {
    console.log("Incorrect PIN Code!");
}
;
