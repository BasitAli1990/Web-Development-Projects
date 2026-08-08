const sounds = [
  {
    id: "Heater-1",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3"
  },
  {
    id: "Heater-2",
    src:"https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3" 
  },
  {
    id: "Heater-3",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3"
  },
  {
    id: "Heater-4",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3"
  },
  {
    id: "Clap", 
    src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3"
  },
  {
    id: "Open-HH",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3"
  },
  {
    id: "Kick-n'-Hat",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3"
  },
  {
    id: "Kick",
    src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3"
  },
  {
    id: "Closed-HH",
    src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3"
  }
];

const drumPads = document.querySelectorAll(".drum-pad");

function addAudio(){
  let audio = "";
  for(let i = 0; i<drumPads.length; i++){
    const id = drumPads[i].id;
    if(id === sounds[i].id){
      audio = new Audio(sounds[i].src);
    }
    drumPads[i].appendChild(audio);
    audio = ""; 
  }
}

function playAudio()
{
  const drumBtns = document.querySelectorAll(".drum-pad");
  const display = document.querySelector("#display");

  drumBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const audioElement = btn.querySelector("audio");
    audioElement.play();
    display.innerText = btn.id;
  });
  });
}

function pauseAudio()
{
  const drumBtns = document.querySelectorAll(".drum-pad");

  drumBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const audioElement = btn.querySelector("audio");
    audioElement.pause();
    display.innerText = "";
    btn.style.pointerEvents = "none";
  });
  });
}

function main()
{
  addAudio(); 

  const powerSelect = document.querySelector(".select");

  powerSelect.addEventListener("click", () => {

    const innerBtn = powerSelect.querySelector(".inner");
    
    const power = (window.getComputedStyle(innerBtn).left === "32px") ? true : false;

      console.log(power);

    const powerStatus = document.querySelector("#power-status");
    
    if(power)
    {
      innerBtn.style.left = "0px";
      powerStatus.innerText = "Off";
      playAudio();
    }
    else 
    {
      innerBtn.style.left = "calc(100% - 18px)";
      powerStatus.innerText = "On";
      playAudio(false);
    }
  });
}

main();


