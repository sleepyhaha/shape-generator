const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/logoGen");
const colourList = require("./lib/colour.json");
const { error } = require("console");

// turns JSON object into an array of arrays
const colourArray = Object.entries(colourList);

const questions = [
  // validates that logo is not more than 3 characters and not less than 0
  {
    type: "input",
    message: "Please enter your logo text (no more than 3 characters plz)",
    name: "logoText",
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      } else {
        console.log(`
        Text must be less than 3 characters.`);
        return false;
      }
    },
  },

  // validation logic flattens array so that it can be searched with includes() to check if user input includes listed colour name or hex code. if true, then adds colour/hex code to render() function. also changes input to lower case to match values in array.. Array is a non-exhaustive list but includes most of the usual suspects
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

// code below copied and rewritten from previous project (README generator)
const writeSVG = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

// initialization function running async. Runs prompt and then once thats finished, puts the answers into the template and write to designated path using writeSVG function.

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
