const main = document.querySelector("main");
const rangeInputs = document.querySelectorAll('input[type="range"]')
const body = document.querySelector("body");
const colorCode = document.querySelector(".colorCode")


function componentToHex(c) {
    let hex = Math.abs(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


body.addEventListener("change", changeColor);


function changeColor() {
    let red = rangeInputs[0].value;
    main.style.setProperty("--range-red", `${red}`);
    let green = rangeInputs[1].value;
    main.style.setProperty("--range-green", `${green}`);
    let blue = rangeInputs[2].value;
    main.style.setProperty("--range-blue", `${blue}`)
    const hex = rgbToHex(red, green, blue);    
    colorCode.innerText = hex.toUpperCase();    
}