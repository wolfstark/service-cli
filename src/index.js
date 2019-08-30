const inquirer = require("inquirer");

console.log("Hi, welcome to Node Pizza");

const questions = [
    {
        type: "list",
        name: "size",
        message: "What size do you need?",
        choices: ["Large", "Medium", "Small"]
    }
];

inquirer.prompt(questions).then(answers => {
    console.log("\nOrder receipt:");
    console.log(JSON.stringify(answers, null, "  "));
});
