const lang = navigator.language;
let date = new Date();

let day_num = date.getDate()
let month = date.getMonth()
let day_name = date.toLocaleString(lang,{weekday : 'long'})
let month_name = date.toLocaleString(lang,{month: 'long'})
let year = date.getFullYear()

document.getElementById('month_name').innerHTML = month_name;
document.getElementById('day_name').innerHTML = day_name;
document.getElementById('day_num').innerHTML = day_num;
document.getElementById('year').innerHTML = year;