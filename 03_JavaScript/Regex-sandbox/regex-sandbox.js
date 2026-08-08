const pattern = document.getElementById("pattern");
const testString = document.getElementById("test-string");
const buttonElement = document.getElementById("test-btn");
const result = document.getElementById("result");
const iElement = document.getElementById("i");
const gElement = document.getElementById("g");
let extension = "";

iElement.addEventListener("change", () => {
  extension = "i";
  console.log(extension);
});

gElement.addEventListener("change", () => {
  extension += "g";
  console.log(extension);
});

buttonElement.addEventListener("click", () => {
  const patterntext = `${pattern.value}` + `${extension}`;
  const testStringText = testString.textContent;
  const matches = testStringText.match(patterntext);
  result.textContent = matches;
});

