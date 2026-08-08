export function Header() {
  return(
      <h1 className="mood-board-heading">Destination Mood Board</h1>
  )
}

export function MoodBoardItem () {
  const data = [
  {
  clr: "rgb(45, 166, 79)",
  src: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
  title: "Caribbean"
},{
  clr: "rgb(148, 68, 173)",
  src: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
  title: "Gawadar Beach"
},
{
 clr: "rgb(52, 152, 219)",
 src: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
 title: "Cape Town" 
},
{
  clr: "rgb(191, 61, 126)",
  src: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
  title: "Suez Canal"
},
{
 clr: "rgb(231, 76, 60)",
 src: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
 title: "Santorini"
},
{
  clr: "rgb(149, 165, 166)",
  src: "	https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
  title: "Istanbul"
}
];
const elements = [];

  data.forEach((d)=>{
    elements.push(  
    <div className="mood-board-item"  
      style=   {{backgroundColor: d.clr}}>
      <img src={d.src} alt="Mood" className="mood-board-image"/>
      <h3 className="mood-board-text">{d.title}</h3>
  </div>) 
  })
  return(
    <div className="mood-board">
      {elements}  
    </div>
  );
}

export function App() {
  return (
    <div>
      <Header/>
      <MoodBoardItem/>
    </div>
  );
}