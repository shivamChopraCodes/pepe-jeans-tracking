export const dateFormatter = (timestamp) =>{
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    let date = timestamp.getDate() > 10 ? timestamp.getDate() : `0${timestamp.getDate()}`
return {
    day : days[timestamp.getDay()], 
    month : months[timestamp.getMonth()],
    date,
    year : timestamp.getFullYear(),
    timestamp
}
}