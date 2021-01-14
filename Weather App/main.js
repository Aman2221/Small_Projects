let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp_svg");
let temp_value = document.getElementById("temp-value");
let climatech = document.getElementById("climate");
let iconFile;
window.addEventListener("load",() => {
    let lon;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy ="https://cors-anywhere.herokuapp.com/";
            const Api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=363f5ca6d104e4b74fce40b7dfd6e2f9`;
            console.log(Api);

            fetch(Api)
                .then((response)=> {
                return response.json();
                })
                .then(data => {
                    const{name} = data;
                    const {feels_like} = data.main;
                    const {id,main} = data.weather[0];

                    loc.textContent = name;
                    climatech.textContent = main;
                    temp_value.textContent = Math.round(feels_like-273);

                    if(id < 250){
                        tempIcon.src = "./storm.svg"
                    }
                    else if(id < 350){
                        tempIcon.src = "./green.svg"
                    }
                    else if(id < 550){
                        tempIcon.src = "./pink.svg"
                    }
                    else if(id < 650){
                        tempIcon.src = "./ple.svg"
                    }
                    else if(id < 800){
                        tempIcon.src = "./blue.svg"
                    }
                    else if(id === 800){
                        tempIcon.src = "./red.svg"
                    }
                })
        })
    }
})