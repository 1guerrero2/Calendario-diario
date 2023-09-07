//Get references to HTML element by their is's

const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");

// create a new date object to get the current date and time 
const date = new Date();

//get the current month and set the text content of the monthname element
monthName.innerText = date.toLocaleDateString("en", {
    month: "long",
})

//get the day of the week and set the text content of the dayName element
dayName.innerText = date.toLocaleDateString("en", {
    weekday: "long",
})

//get the current day of the month and set the text content of the dayNumber element
dayNumber.innerText = date.getDate();

//get the current year and set the text content of the year element
year.innerText = date.getFullYear();


