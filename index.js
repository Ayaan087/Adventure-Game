import inquirer from "inquirer";
import chalk from "chalk";
class player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let ans = await inquirer.prompt([{
        type: "input",
        name: "ans",
        message: "Hello stranger,would you like to tell me your name please?"
    }]);
console.log(`${chalk.red.bold.italic(ans.ans)}`);
let opponent = await inquirer.prompt([{
        type: "list",
        name: "opponent",
        message: "Whom will you chose as your opponent",
        choices: ["Shadow", "Skeleton", "SPider"]
    }]);
console.log(opponent.opponent);
let p1 = new player(ans.ans);
let o1 = new Opponent(opponent.opponent);
console.log(`${chalk.yellowBright.bold(p1.name)} vs ${chalk.redBright.bold(o1.name)}`);
do {
    if (opponent.opponent == "Shadow") {
        let ask = await inquirer.prompt([{
                name: "option",
                type: "list",
                choices: ["Run", "Attack", "Heal",],
                message: "select your options"
            }]);
        if (ask.option == "Run") {
            console.log("Better Luck next time");
            process.exit();
        }
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name}fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log("Better luck next time");
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.greenBright.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Heal") {
            p1.fuelIncrease();
            console.log(chalk.green.bold(`Healed`));
        }
    }
    if (opponent.opponent == "Skeleton") {
        let ask = await inquirer.prompt([{
                name: "option",
                type: "list",
                choices: ["Run", "Attack", "Heal",],
                message: "select your options"
            }]);
        if (ask.option == "Run") {
            console.log("Better Luck next time");
            process.exit();
        }
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name}fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log("Better luck next time");
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.greenBright.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Heal") {
            p1.fuelIncrease();
            console.log(chalk.green.bold(`Healed`));
        }
    }
    if (opponent.opponent == "SPider") {
        let ask = await inquirer.prompt([{
                name: "option",
                type: "list",
                choices: ["Run", "Attack", "Heal",],
                message: "select your options"
            }]);
        if (ask.option == "Run") {
            console.log("Better Luck next time");
            process.exit();
        }
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name}fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log("Better luck next time");
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.greenBright.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Heal") {
            p1.fuelIncrease();
            console.log(chalk.green.bold(`Healed`));
        }
    }
} while (true);
