const currentDate = new Date();
console.log(currentDate);
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formateDateMMDDYYYY(date)
{
  return date.toLocaleDateString('en-US');
}

console.log(formateDateMMDDYYYY(currentDate));

function formatDateLong(date)
{
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
}


console.log(formatDateLong(currentDate));