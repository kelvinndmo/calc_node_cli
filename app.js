const yargs = require("yargs");
const mathh = require("./compute");
const chalk = require("chalk");

const builderFn = () => ({
  firstNumber: {
    describe: "Enter first number",
    demandOption: true,
    type: "number"
  },
  secondNumber: {
    describe: "Enter second number",
    demandOption: true,
    type: "number"
  }
});

yargs.command({
  command: "add",
  describe: "Add two numbers",
  builder: builderFn(),
  handler(argv) {
    console.log(chalk.green(mathh.add(argv.firstNumber, argv.secondNumber)));
  }
});

yargs.command({
  command: "substract",
  describe: "Substract two numbers",
  builder: builderFn(),
  handler(argv) {
    console.log(
      chalk.green(mathh.substract(argv.firstNumber, argv.secondNumber))
    );
  }
});

yargs.command({
  command: "multiply",
  describe: "multiply two numbers",
  builder: builderFn(),
  handler(argv) {
    console.log(
      chalk.blue(mathh.multiplication(argv.firstNumber, argv.secondNumber))
    );
  }
});

yargs.command({
  command: "divide",
  describe: "divide two numbers",
  builder: builderFn(),
  handler(argv) {
    console.log(
      chalk.italic.yellow(mathh.division(argv.firstNumber, argv.secondNumber))
    );
  }
});

yargs.parse();

module.exports = {
  builderFn
};
