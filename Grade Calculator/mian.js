const calcu = () =>{
    let physics = document.getElementById('ph').value;
    let Biology = document.getElementById('bi').value;
    let Maths = document.getElementById('ma').value;
    let chemistry = document.getElementById('ch').value;
    let English = document.getElementById('en').value;
    let grades = "";
    let total = parseFloat(Maths) + parseFloat(physics) + parseFloat(Biology) + parseFloat(chemistry) + parseFloat(English);

    let percent = (total / 500) * 100;
    
    if(percent <= 100 && percent >= 80)
    {
        grades = 'A';
    }
    else if(percent <= 79 && percent >= 60)
    {
        grades = 'B';
    }
    else if(percent <= 59 && percent >= 40)
    {
        grades = 'C';
    }
    else
    {
        grades = "F";
    }
    
    document.getElementById('result').innerHTML = ` Total : ${total} <br><hr></hr> Percent : ${percent}% <br><hr></hr> Grade : ${grades} <hr></hr> `
}