let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")
let body = document.querySelector("body")
let colorInfo = document.getElementById("colorInfo")
console.log(colorInfo)
function updateColor(){
	body.style.background = "linear-gradient(to right," + color1.value +"," + color2.value + ")";
	colorInfo.textContent = body.style.background

}

color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);