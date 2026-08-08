const generateElement = () => Math.floor(Math.random()*100);

let A;

function generateArray(){
  let Arr = [];
  for(let i = 0; i < 5; i++){
    Arr[i] = generateElement();
  }
  const arrayDiv = document.getElementById("starting-array");
  let HTMLstring = "";
  Arr.forEach((Element) => {
    HTMLstring += `<span id="number-${Element}">${Element}</span>`
  });
  arrayDiv.innerHTML = HTMLstring;
  return Arr;
}

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener('click',() => {
  A = generateArray();
  const sortBtn = document.getElementById("sort-btn");
  sortBtn.style.display = "inline";
  return A;
});

const sortBtn = document.getElementById("sort-btn");

const fillArrContainer = (A) => {
  let html = "";
  A.forEach((e) => {
    html += `<span>${e}</span>`;
  });
  return html;
};

const generateContainer = (A) => {
    const container = document.getElementById("array-container");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = fillArrContainer(A);
    container.appendChild(newDiv);
};

const isOrdered = (a, b) => a <= b ? true : false;

const swapElements = (Arr) => {
  for(let i = 0; i < Arr.length - 1; i++){
    if(!isOrdered(Arr[i], Arr[i+1]))
    {
      const firstElement = document.getElementById(`number-${Arr[i]}`);
      const secondElement = document.getElementById(`number-${Arr[i+1]}`);
      firstElement.style.border = "2px dashed red";
      let temp = Arr[i];
      Arr[i] = Arr[i+1];
      Arr[i+1] = temp;
    }
  }

  for(let i = 0; i < Arr.length - 1; i++)
  {
    if(isOrdered(Arr[i], Arr[i+1]))
      return Arr; 
    else
      swapElements(Arr[i], Arr[i+1]);
  }
  return Arr;
}

console.log(swapElements([20, 25, 68, 30, 36]));

sortBtn.addEventListener('click', () => {
  generateContainer(A);
  console.log(swapElements(A));
});
