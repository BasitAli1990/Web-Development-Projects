const btnPaper = document.querySelector(".btn-paper");
const btnWater = document.querySelector(".btn-water");
const btnPen = document.querySelector(".btn-pen");

btnPaper.addEventListener("click", function () {
  const isFilled = btnPaper.innerHTML === "❤" ? true : false;

  if(!isFilled)
    {
      btnPaper.innerHTML = "❤";
      btnPaper.classList.add("filled");
    }
  else
    {
     btnPaper.innerHTML = "&#9825;";
     btnPaper.classList.remove("filled"); 
    }
});

btnWater.addEventListener("click", function () {
  const isFilled = btnWater.innerHTML === "❤" ? true : false;

  if(!isFilled)
    {
      btnWater.innerHTML = "❤";
      btnWater.classList.add("filled");
    }
  else
    {
     btnWater.innerHTML = "&#9825;";
     btnWater.classList.remove("filled"); 
    }
});

btnPen.addEventListener("click", function () {
    const isFilled = btnPen.innerHTML === "❤" ? true : false;

  if(!isFilled)
    {
      btnPen.innerHTML = "❤";
      btnPen.classList.add("filled");
    }
  else
    {
     btnPen.innerHTML = "&#9825;";
     btnPen.classList.remove("filled"); 
    }
  });

