let footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false
    }, 
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Oscar Garré",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
}
let nameElement = document.querySelector('.team-name');
let yearElement = document.querySelector('.year');
let headCoachElement = document.querySelector('.head-coach');
let CardsElement = document.querySelector('.cards')
let selectElement = document.getElementById('players');

let playerHTML = "";

function renderPlayerHTML(value){
  let players = [];
  playerHTML = "";
  if (value === 'all'){
    players = footballTeam.players;
  }
  else
  {
    players = footballTeam.players.filter(player => player.position === value
    );
  }
   players.forEach((player) => {
   playerHTML += 
     `
       <div class="player-card">
         <h2>${player.name}</h2>
         <p>Position: ${player.position}</p>
       </div>
     `;
   });
   return playerHTML
}

function updatePage()
{
  
  nameElement.innerText = `Team: ${footballTeam.team}`;
  yearElement.innerText = `Year: ${footballTeam.year}`;
  headCoachElement.innerText = `Head coach: ${footballTeam.headCoach}`;
}
updatePage();
CardsElement.innerHTML = renderPlayerHTML("all");
selectElement.addEventListener("change", function() {
    let filterPlayers = '';
    CardsElement.innerHTML = '';
    filterPlayers = selectElement.value;
    if(filterPlayers)
       CardsElement.innerHTML = renderPlayerHTML(filterPlayers);
  });




