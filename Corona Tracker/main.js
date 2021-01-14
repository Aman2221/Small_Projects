async function getAPI(){
    const jsonApi = await fetch('https://api.covid19api.com/summary');   

    const jsonData = await jsonApi.json();
    const json_name = jsonData.Countries[76];
 
    document.getElementById("main").innerHTML=` Name : ${json_name.Country}.<br><hr></hr>
    Confirmed : ${json_name.TotalConfirmed} <br><hr></hr>
    Deaths : ${json_name.TotalDeaths}<hr></hr>`;

}

