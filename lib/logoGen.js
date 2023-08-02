const shapes = require("./shapes");

const generateLogo = (data) => {
  if (data.shape == "Circle") {
    let userLogo = new shapes.Circle(
      data.logoColour,
      data.textColour,
      data.logoText
    );
    return userLogo.render();
  }

  if (data.shape == "Square") {
    let userLogo = new shapes.Square(
      data.logoColour,
      data.textColour,
      data.logoText
    );
    return userLogo.render();
  }

  if (data.shape == "Triangle") {
    let userLogo = new shapes.Triangle(
      data.logoColour,
      data.textColour,
      data.logoText
    );
    return userLogo.render();
  }
};
module.exports = generateLogo;
