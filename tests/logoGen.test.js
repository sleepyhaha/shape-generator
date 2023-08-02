const shapes = require("../lib/shapes");

test("Circle", () => {
  const circle = new shapes.Circle("purple", "green", "PLS");
  expect(circle.render()).toEqual(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <circle cx="150" cy="100" r="75" fill="purple" stroke="black" stroke-width="4"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="56" font-weight="bold" fill="green">PLS</text>
</svg>`
  );
});

test("Square", () => {
  const square = new shapes.Square("blue", "black", "YES");
  expect(square.render()).toEqual(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <rect x="75" y="25" width="150" height="150" fill="blue" stroke="black" stroke-width="4"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="56" font-weight="bold" fill="black">YES</text>
</svg>`
  );
});

test("Triangle", () => {
  const triangle = new shapes.Triangle("red", "skyblue", "WTF");
  expect(triangle.render()).toEqual(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <polygon points="150,25 275,175 25,175" fill="red" stroke="black" stroke-width="4"/>
  <text x="150" y="135" text-anchor="middle" dominant-baseline="middle" font-size="56" font-weight="bold" fill="skyblue">WTF}</text>
</svg>`
  );
});
