class Rectangle {
  constructor(x, y, width, height, fill) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fill = fill;
  }
}

class Circle {
  constructor(r, cx, cy, fill) {
    this.r = r;
    this.cx = cx;
    this.cy = cy;
    this.fill = fill;
  }
}

// polygon = triangle
class Triangle {
  constructor(points, fill) {
    this.points = points;
    this.fill = fill;
  }
}

class LogoText {
  constructor(fontsize, textanchor, x, y) {
    this.fontsize = fontsize;
    this.textanchor = textanchor;
    this.x = x;
    this.y = y;
  }
}

const questions = [
  {
    type: "input",
    message: "Please enter your logo text (no more than 3 characters plz)",
    name: "logotext",
  },
  {
    type: "input",
    message: "Please enter the background colour",
    name: "colour",
  },
  {
    type: "list",
    message: "Please choose a shape",
    name: "shape",
    choices: ["circle", "square", "triangle"],
  },
];
