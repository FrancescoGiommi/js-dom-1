const lampImageEl = document.getElementById("lamp");
const lampLightOnEl = document.getElementById("light-on");
const buttonSwitchEl = document.getElementById("button-switch-light");

const imgLamp = document.createElement("img");
imgLamp.classList.add("image-fluid");

console.log(imgLamp);

const imgLightOn = document.createElement("img");
imgLightOn.classList.add("image-fluid");
imgLightOn.src = "./img/yellow_lamp.png";
console.log(imgLightOn);

lampImageEl.append(imgLamp);

buttonSwitchEl.addEventListener("click", function () {
  lampImageEl.src = "./img/yellow_lamp.png";
});
