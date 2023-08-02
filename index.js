const colourList = require("./lib/colour.json");
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
        console.log("Text must be between 0 - 3 characters.");
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
        return;
      } else {
        console.log("Please enter a different colour");
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
        return;
      } else {
        console.log("Please enter a different colour");
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
