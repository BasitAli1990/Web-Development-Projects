const inputElement = document.querySelector(".palindrome-input");
const checkBtn = document.querySelector(".palindrome-btn");
const resultDiv = document.querySelector(".results-div");
const resultPara = document.querySelector(".user-input");

function ispalindrome(text) 
{
  const cleaned = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
  console.log(cleaned);
  const reversed = cleaned.split('').reverse().join('');
  console.log(reversed);
  return cleaned === reversed;
}

checkBtn.addEventListener("click",() => {
  const text = inputElement.value;
  if(text === "")
    alert("Please input a value");
  else if(ispalindrome(text))
  {
    resultDiv.classList.remove("hidden");
    resultPara.innerHTML = `<strong> ${text} </strong>is a palindrome.`;
    console.log(`${text} is a palindrome`);

  }
  else
  {
    resultDiv.classList.remove("hidden");
    resultPara.innerHTML = `<strong>${text} </strong>is not a palindrome.`;
    console.log(`${text} is not a palindrome`);
  }
});
