function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  return Array.from({ length: 5}, generateElement);
}

function generateContainer() {
  const div = document.createElement("div");
  div.classList.add("array-step");
  return div;
}

function fillArrContainer(container, arr) {
  container.innerHTML = "";
  arr.forEach(num => {
   const span = document.createElement("span");
   span.textContent = num;
   span.classList.add("array-element");
   container.appendChild(span);     
  });
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(arr, index) {
  if(!isOrdered(arr[index], arr[index+1])){
    const temp = arr[index];
    arr[index] = arr[index+1];
    arr[index+1] = temp;
  }
}

function highlightCurrentEls(container, index){
  const children = container.children;
  if(children[index]){
    children[index].style.border = "2px dashed red";
  }
  if(children[index + 1]) {
    children[index + 1].style.border = "2px dashed red";
  }
}

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

let currentArray = [];

generateBtn.addEventListener('click', () => {
  currentArray = generateArray();
  //startingArray.innerHTML = "";
  //arrayContainer.innerHTML = "";
  fillArrContainer(startingArray, currentArray);
  sortBtn.style.display = "inline";
});

sortBtn.addEventListener('click', () => {
  if(currentArray.length !== 5) return;

    arrayContainer.innerHTML = "";

    let arr = [...currentArray];
    const n = arr.length;
    let swapped;

    // Add initial array
    const initialDiv = generateContainer();
    fillArrContainer(initialDiv, arr);
    highlightCurrentEls(initialDiv, 0);
    arrayContainer.appendChild(initialDiv);

    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        const stepArr = [...arr];
        const stepDiv = generateContainer();

        if (!isOrdered(arr[j], arr[j + 1])) {
          swapElements(arr, j);
          swapped = true;
        }

        fillArrContainer(stepDiv, arr);
        highlightCurrentEls(stepDiv, j);
        arrayContainer.appendChild(stepDiv);
      }
      if (!swapped) break;
    }
  });
