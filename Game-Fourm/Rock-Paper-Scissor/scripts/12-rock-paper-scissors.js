const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
     intervalId = setInterval(() => {
       const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
    }    
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector('.js-reset-score-button').addEventListener('click', () => {
   resetScore();
 });

 document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (event)=>{
  if(event.key === 'r'){
    playGame('rock');
  }
  else if(event.key === 'p'){
    playGame('paper');
  }
  else if(event.key === 's'){
    playGame('scissors');
  }
  else{
    alert('Press valid key');
  }
})

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

function playGame(playerMove){

  const computerMove = pickComputerMove();

    console.log(computerMove);

    let result = '';

  if(playerMove === 'scissors'){
    if(computerMove === 'rock'){
      result = 'You Lose.';
    } else if(computerMove === 'paper'){
      result = 'You Win.';
    }else if(computerMove === 'scissors'){
      result = 'Tie.';
    }
  } 
  else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'You Win.';
    } else if(computerMove === 'paper'){
      result = 'Tie.';
    }else if(computerMove === 'scissors'){
      result = 'You Lose.';
    }
  }
  else if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'Tie.';
    } else if(computerMove === 'paper'){
      result = 'You Lose.';
    }else if(computerMove === 'scissors'){
      result = 'You Win.';
    }
  }

  if(result === 'You Win.'){
    score.wins += 1;
  } else if(result === 'You Lose.'){
    score.losses += 1;
  } else if(result === 'Tie.'){
    score.ties += 1;
  }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
    <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
    Computer`;
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  gameOver();
}

function pickComputerMove(){

    randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber >= 0 &&randomNumber < 1/3){
          computerMove =  'rock';
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
          computerMove = 'paper';
    }else if(randomNumber >= 2/3 &&   randomNumber < 1){
          computerMove = 'scissors';
    }

    return computerMove;

}

function gameOver(){
  if(score.wins > score.losses){
    if(score.wins >= 10){
      document.querySelector('.js-body').innerHTML = `
        <center>
          <h1 style="color: green">Congratulations You win the tournement</h1>
          <div class = "img"
          >
          <img src = "win.jpeg">
          </div>
          <p style = "
              font-size: 20px;
              color: blue;
              font-weight: bold;
          ">Game is Over</p>
          <a href= 12-rock-paper-scissor.html
          onclick = "${resetScore()}" 
          style = "
            background-color: green; 
            color: white;
            text-decoration: none;
            font-size: 25px;
            padding: 10px 30px;
            border-radius: 5px;
            margin-top: 10px;
            ">Tap to play again </a>
        </center>
            `;
    }
  }
  else if(score.losses > score.wins){
    if(score.losses >= 10){
      document.querySelector('.js-body').innerHTML = `
          <center>
          <h1 style="color: red">Sorry you lose the tournement</h1>
          <div class = "img"
          >
          <img src = "lose.jpeg">
          </div>
          <p style = "
              font-size: 20px;
              color: blue;
              font-weight: bold;
          ">Game is Over</p>
          <a href=12-rock-paper-scissor.html
          onclick = "${resetScore()}"  
          style = "
            background-color: red; 
            color: white;
            text-decoration: none;
            font-size: 25px;
            padding: 10px 30px;
            border-radius: 5px;
            margin-top: 10px;
            ">Tap to play again </a>
        </center>
        `;
    }
   }
}
