function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const color = document.querySelector(".color");
const selectColor = document.querySelector(".change-color");

selectColor.addEventListener("click", event =>{
  const newColor = getRandomHexColor();
  color.textContent = newColor;
  body.style.backgroundColor = newColor;
});