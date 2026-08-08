function characterCounter()
{
  const textareaElement = document.getElementById('text-input');
}
const paragraphElement = document.getElementById('char-count');
const textareaElement = document.getElementById('text-input');
let count = 0;
const maxLength = 50;

function inputCounter () 
{
  textareaElement.addEventListener('input', () => {

  let isMaxLimReached = false;

    if (textareaElement.value.length >= maxLength) {
      textareaElement.value = textareaElement.value.slice(0, maxLength); // Trim the input
      isMaxLimReached = true;
    }
    if(!isMaxLimReached)
      if(event.data != null)
        paragraphElement.innerHTML = `Character Count: ${count ++}/50`;
      else
        paragraphElement.innerHTML = `Character Count: ${count --}/50`;

  });
}

inputCounter();
