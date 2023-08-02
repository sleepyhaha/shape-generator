class Shape {
  constructor(logoColour, textColour, text) {
    this.logoColour = logoColour;
    this.textColour = textColour;
    this.text = text;
  }
}

class Circle extends Shape {
  constructor(logoColour, textColour, text) {
    super(logoColour, text, textColour);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <circle cx="150" cy="100" r="75" fill="${this.logoColour}" stroke="black" stroke-width="4"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="56" font-weight="bold" fill="${this.textColour}">${this.text}</text>
</svg>`;
  }
}

class Square extends Shape {
  constructor(logoColour, textColour, text) {
    super(logoColour, text, textColour);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  rect x="75" y="25" width="150" height="150" fill="${this.logoColour}" stroke="black" stroke-width="4"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="56" font-weight="bold" fill="${this.textColour}">${this.text}</text>
</svg>`;
  }
}

class Triangle extends Shape {
  constructor(logoColour, textColour, text) {
    super(logoColour, text, textColour);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <polygon points="150,25 275,175 25,175" fill="${this.logoColour}" stroke="black" stroke-width="4"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="56" font-weight="bold" fill="${this.textColour}">${this.text}</text>
</svg>`;
  }
}

module.exports = { Circle, Square, Triangle };
