const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const tempDate = new Date()
const tempyear = tempDate.getFullYear()
const tempmonth = tempDate.getMonth()
const tempday =tempDate.getDate()

let futureDate = new Date(tempyear, tempmonth, tempday + 10, 15, 30, 0);
console.log(futureDate);

let year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];

let day = futureDate.getDay();
day = weekdays[day];

let date = futureDate.getDate();

let hour = futureDate.getHours();
let minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hour}:${minutes}pm`;

const futureTime = futureDate.getTime();


function remainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days =Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour);
  let minute = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
 const values= [days,hours,minute,seconds]
  function format(item) {
    if (item < 10) {
return (item = `0${item}`)
    } return item
 }
  items.forEach(function (item, index) {
    item.innerHTML= format(values[index])
  })
  if (t < 0) {
    clearInterval(countDown)
    deadline.innerHTML=`<h4 class='expired>Deadline Over</h4>`
  }
}
let countDown = setInterval(remainingTime,1000)
remainingTime();
