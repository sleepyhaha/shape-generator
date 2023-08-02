const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/logoGen");
const colourList = require("./lib/colour.json");
const { error } = require("console");

const colourArray = Object.entries(colourList);

const questions = [
  {
    type: "input",
    message: "Please enter your logo text (no more than 3 characters plz)",
    name: "logoText",
    validate: (input) => {
      if (input.length <= 3 && input.length > 0) {
        return true;
      } else {
        console.log(`
        Text must be between 0 - 3 characters.`);
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the text colour",
    name: "textColour",
    validate: (input) => {
      let inputLower = input.toLowerCase();
      if (colourArray.flat().includes(inputLower) === true) {
        return true;
      } else {
        console.log(`
        Please enter a different colour`);
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the background colour",
    name: "logoColour",
    validate: (input) => {
      let inputLower = input.toLowerCase();
      if (colourArray.flat().includes(inputLower) === true) {
        return true;
      } else {
        console.log(`
        Please enter a different colour`);
        return false;
      }
    },
  },
  {
    type: "list",
    message: "Please choose a shape",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
  },
];

const writeSVG = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

const generateSVG = async () => {
  try {
    const userInput = await inquirer.prompt(questions);
    const finalSVG = generateLogo(userInput);
    writeSVG("./output/logo.svg", finalSVG);
    console.log("Logo generated. Please find your logo in the output folder.");
  } catch (err) {
    console.log(err);
  }
};

generateSVG();
