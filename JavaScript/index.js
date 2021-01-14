let Div_1 = document.getElementById("first");
let Div_2 = document.getElementById("last");
const MoveRight = () => {
    Div_1.classList.add("new"); 
    Div_2.classList.add("newLast");
}
const MoveLeft = () => {
    Div_2.classList.add("newLast");
    Div_1.classList.add("new"); 
}