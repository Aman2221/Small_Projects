let Global = new Date();
let MilliSeconds = Global.getMilliseconds();
let Seconds = Global.getSeconds();
let Minutes = Global.getMinutes();
let Hours = Global.getHours();
let items = document.getElementById("main");
items.innerText = `${Hours}:${Minutes}:${Seconds}:${MilliSeconds}`;