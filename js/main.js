/* dichiaro gli elementi nel DOM */
const lampImageEl = document.getElementById("lamp");
const lampLightOnEl = document.getElementById("light-on");
const buttonSwitchEl = document.getElementById("button-switch-light");

const imgLamp = document.createElement("img");
imgLamp.classList.add("image-fluid");

/* dichiaro l'immagine della lampadina accesa */
const imgLightOn = document.createElement("img");
imgLightOn.classList.add("image-fluid");
imgLightOn.src = "./img/yellow_lamp.png";
console.log(imgLightOn);

lampImageEl.append(imgLamp);

/* funzione per accendere la lampadina */
let lampLight = true;
buttonSwitchEl.addEventListener("click", function () {
  if (lampLight) {
    lampImageEl.src = "./img/yellow_lamp.png";
  } else {
    lampImageEl.src = "./img/white_lamp.png";
  }
  lampLight = !lampLight;
});
