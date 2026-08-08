const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
const gameOverDisplay = document.getElementById('game-over');
const movesDisplay = document.getElementById('moves');

const width = 8;
const squares = [];
let score = 0;
let moves = 10; // 🎯 Set maximum moves

const candyColors = ['🍒', '🍋', '🍊', '🍇', '🍏', '💎', ''];

// Create the board
function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div');
    square.setAttribute('draggable', true);
    square.setAttribute('id', i);
    const randomCandy = candyColors[Math.floor(Math.random() * candyColors.length)];
    square.textContent = randomCandy;
    grid.appendChild(square);
    squares.push(square);
  }
}
createBoard();

// Drag logic
let colorBeingDragged, colorBeingReplaced, squareIdBeingDragged, squareIdBeingReplaced;

squares.forEach(square => square.addEventListener('dragstart', dragStart));
squares.forEach(square => square.addEventListener('dragover', dragOver));
squares.forEach(square => square.addEventListener('dragenter', dragEnter));
squares.forEach(square => square.addEventListener('dragleave', dragLeave));
squares.forEach(square => square.addEventListener('drop', dragDrop));
squares.forEach(square => square.addEventListener('dragend', dragEnd));

function dragStart() {
  if (moves <= 0) return; // prevent interaction after game over
  colorBeingDragged = this.textContent;
  squareIdBeingDragged = parseInt(this.id);
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {}

function dragDrop() {
  if (moves <= 0) return;

  colorBeingReplaced = this.textContent;
  squareIdBeingReplaced = parseInt(this.id);
  this.textContent = colorBeingDragged;
  squares[squareIdBeingDragged].textContent = colorBeingReplaced;
}

function dragEnd() {
  if (moves <= 0) return;

  const validMoves = [
    squareIdBeingDragged - 1,
    squareIdBeingDragged + 1,
    squareIdBeingDragged - width,
    squareIdBeingDragged + width
  ];
  const validMove = validMoves.includes(squareIdBeingReplaced);

  if (!validMove && squareIdBeingReplaced !== null) {
    // Undo the swap
    squares[squareIdBeingDragged].textContent = colorBeingDragged;
    squares[squareIdBeingReplaced].textContent = colorBeingReplaced;
  } else if (validMove && squareIdBeingReplaced !== null) {
    // Valid move, decrement move count
    moves--;
    movesDisplay.textContent = moves;
    checkGameOver();
  }

  squareIdBeingDragged = null;
  squareIdBeingReplaced = null;
}

// Match checking
function checkRowForThree() {
  const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];

  for (let i = 0; i < 61; i++) {
    if (notValid.includes(i)) continue;
    let row = [i, i+1, i+2];
    let decidedCandy = squares[i].textContent;

    if (row.every(index => squares[index].textContent === decidedCandy && decidedCandy !== '')) {
      score += 3;
      scoreDisplay.textContent = score;
      row.forEach(index => squares[index].textContent = '');
    }
  }
}

function checkColumnForThree() {
  for (let i = 0; i < 47; i++) {
    let column = [i, i+width, i+width*2];
    let decidedCandy = squares[i].textContent;

    if (column.every(index => squares[index].textContent === decidedCandy && decidedCandy !== '')) {
      score += 3;
      scoreDisplay.textContent = score;
      column.forEach(index => squares[index].textContent = '');
    }
  }
}

function moveDown() {
  for (let i = 0; i < 56; i++) {
    if (squares[i + width].textContent === '') {
      squares[i + width].textContent = squares[i].textContent;
      squares[i].textContent = '';
    }

    if (squares[i].textContent === '') {
      let randomCandy = candyColors[Math.floor(Math.random() * candyColors.length)];
      squares[i].textContent = randomCandy;
    }
  }
}

// Game over logic
function checkGameOver() {
  if (moves <= 0) {
    gameOverDisplay.classList.remove('hidden');
    clearInterval(gameLoop);
  }
}

// Game loop
const gameLoop = setInterval(() => {
  moveDown();
  checkRowForThree();
  checkColumnForThree();
}, 150);
