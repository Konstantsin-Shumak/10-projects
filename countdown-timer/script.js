const headerText = document.getElementById("selectedDay");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const selectedDay = "1 Jan 2022";

headerText.innerText = selectedDay;

const getTime = () => {
    const selectedDatDate = new Date(selectedDay);
    const currentDate = new Date();

    const totalSeconds = (selectedDatDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
}

const formatTime = (time) => time < 10 ? (`0${time}`) : time;

setInterval(getTime, 1000);