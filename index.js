function updateTime(){
    // Time
    const time = new Date();
    let hours = time.getHours();
    let meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    let minutes = time.getMinutes().toString().padStart(2,0);
    let seconds = time.getSeconds().toString().padStart(2,0);

    let clock = `${hours}:${minutes}:${seconds} ${meridian}`;
    let clockDisplay = document.querySelector("#clock")
    clockDisplay.textContent = clock; 

    // Date
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];

    let date = time.getDate();
    let day = days[time.getDay()];
    let month = months[time.getMonth()];
    let year = time.getFullYear();

    
    let calendar = `${day}, ${date}${getOrdinalSuffix(date)} ${month} ${year}`
    let calendarDisplay = document.querySelector("#calendar")
    calendarDisplay.textContent = calendar
    
    function getOrdinalSuffix(day) {
        if (day % 10 === 1 && day !== 11) {
            return "st";
        } else if (day % 10 === 2 && day !== 12) {
            return "nd";
        } else if (day % 10 === 3 && day !== 13) {
            return "rd";
        } else {
            return "th";
        }
    }
}

updateTime()
setInterval(updateTime, 1000)