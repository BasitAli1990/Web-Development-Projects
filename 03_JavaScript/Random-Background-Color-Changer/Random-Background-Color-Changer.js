const bodyElement = document.querySelector('.js-body');
const btnElement = document.querySelector('.js-button');
const paraElement = document.querySelector('.js-paragraph');
console.log(paraElement);

function setRandomColor(){
  const color = ["#110815","#2C3E50","#36454F","#2f4f4f", "#0E4B5A"," #616A6B","##2C2C2C","#800020", "#4A235A", "#34495E"];
  const randomColor = Math.floor(Math.random() * color.length);
  bodyElement.style.backgroundColor = color[randomColor];
  paraElement.textContent = `Hex Code: ${color[randomColor]}`; 
}
btnElement.addEventListener("click", () => {
  setRandomColor();
});

