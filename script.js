"use strict";

const myColors = ["red", "blue", "yellow", "green"];
const button = document.getElementById("submit");
let color = 0;

button.addEventListener("click", () => {
  if (color > myColors.length - 1) {
    color = 0;
  }
  document.body.style.backgroundColor = myColors[color++];
});
