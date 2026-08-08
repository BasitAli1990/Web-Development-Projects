const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNumber = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const complaintDescription = document.getElementById('complaint-description');
const radioButtons = document.querySelectorAll('input[type="radio"');
const solutionDescription = document.getElementById("solution-description");

function validateForm ()
{
  let isValidFullName = false;

  if(fullName.value !== "")
    isValidFullName = true;
 
  let isValidEmail = false;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  isValidEmail = emailRegex.test(email.value);

  let validOrderNumber = false;

  const regexOrderNumber = /^2024\d{6}$/;
  validOrderNumber = regexOrderNumber.test(orderNumber.value);

  let isValidProductCode = false;

  const regexProductCode = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
  isValidProductCode = regexProductCode.test(productCode.value);

  let isValidQuantity = false;

  if((Number(quantity.value)) > 0)
    isValidQuantity = true;

  let isAnyChecked = false;
  isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);

  let isValidComplaintDescriptionlength = false;
  const otherCheckBox = document.getElementById('other-complaint');
  if(otherCheckBox.checked){
    if(complaintDescription.value.length >= 20)
      isValidComplaintDescriptionlength = true;
  }

  let isValidSolutionRadio = Array.from(radioButtons).some(cb => cb.checked);

  let isValidDesiredSolutionDescription = false;
  const otherRadioButton = document.getElementById('other-solution');
  if(otherRadioButton.checked){
    if(solutionDescription.value.length >= 20)
      isValidDesiredSolutionDescription = true;
  }

  const validity = {
    Name: isValidFullName,
    Email: isValidEmail,
    OrderNum: validOrderNumber,
    ProductCode: isValidProductCode,
    Quantity: isValidQuantity,
    Checkboxes: isAnyChecked,
    ComplaintDescription: isValidComplaintDescriptionlength,
    solutioGroup: isValidSolutionRadio,
    SolutionDescription: isValidDesiredSolutionDescription
  };

  return validity;
}

function isValid () 
{
  const allTruthy = Object.values(validateForm()).every(Boolean);
  if(allTruthy)
    return true;
  return false;
}

fullName.addEventListener("change", () => {
  if(validateForm().Name)
    fullName.style.border = "2px solid green";
  else 
    fullName.style.border = "2px solid red";
});

email.addEventListener("change", () => {
  if(validateForm().Email)
    email.style.border = "2px solid green";
  else 
    email.style.border = "2px solid red";
});

orderNumber.addEventListener("change", () => {
  if(validateForm().OrderNum)
    orderNumber.style.border = "2px solid green";
  else 
    orderNumber.style.border = "2px solid red";
});

productCode.addEventListener("change", () => {
  if(validateForm().ProductCode)
    productCode.style.border = "2px solid green";
  else 
    productCode.style.border = "2px solid red";
});

quantity.addEventListener("change", () => {
  if(validateForm().Quantity)
    quantity.style.border = "2px solid green";
  else 
    quantity.style.border = "2px solid red";
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const checkboxesFieldset = document.getElementById("complaints-group");
    if(validateForm().Checkboxes)
    {
      checkboxesFieldset.style.border = "2px solid green";
    }
    else 
    {
      checkboxesFieldset.style.border = "2px solid red";
    }
  });
});

complaintDescription.addEventListener("change", () => {
  if(validateForm().ComplaintDescription)
    complaintDescription.style.border = "2px solid green";
  else 
    complaintDescription.style.border = "2px solid red";
});

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', function() {
    const radioButtonFieldset = document.getElementById("solutions-group");
    if(validateForm().solutioGroup)
    {
      radioButtonFieldset.style.border = "2px solid green";
    }
    else 
    {
      radioButtonFieldset.style.border = "2px solid red";
    }
  });
});

solutionDescription.addEventListener("change", () => {
  if(validateForm().SolutionDescription)
    solutionDescription.style.border = "2px solid green";
  else 
    solutionDescription.style.border = "2px solid red";
});

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  if(isValid())
  {
    submitBtn.click();
  }
});