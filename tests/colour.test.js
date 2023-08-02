const colourList = require("./lib/colour.json");

const colourArray = Object.entries(colourList);

test("Colour found in list", () => {
  expect(colourArray.flat().includes("blue")).toBeTruthy();
});

test("Colour not found in list", () => {
  expect(colourArray.flat().includes("UHHHHH")).toBeFalsy();
});
