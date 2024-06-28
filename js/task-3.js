const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const trimValue = event.currentTarget.value.trim();
  if (trimValue) {
    output.textContent = trimValue;
  } else {
    output.textContent = "Anonymous";
  }
});