const lampImageEl = document.getElementById("lamp");
const lampImageOnEl = document.getElementById("light-on");
const buttonSwitchEl = document.getElementById("button-switch-light");

const imgLamp = document.createElement("img");
imgLamp.src = "img/white_lamp.png";
imgLamp.classList.add("image-fluid");
console.log(imgLamp);

lampImageEl.append(imgLamp);

const imgLightOn = document.createElement("img");
imgLightOn.src = "img/yellow_lamp.png";
imgLightOn.classList.add("image-fluid");
console.log(imgLightOn);

lampImageOnEl.append(imgLightOn);

document.body.appendChild(imgLamp);

buttonSwitchEl.addEventListener("click", () => {
  imgLamp.classList.toggle(imgLightOn);
});
