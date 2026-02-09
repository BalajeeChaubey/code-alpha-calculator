const display = document.getElementById("display");

/* Append Number or Operator */
function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

/* Clear Display */
function clearDisplay() {
  display.innerText = "0";
}

/* Delete Last Character */
function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") {
    display.innerText = "0";
  }
}

/* Calculate Result */
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

/* Theme Toggle */
function toggleTheme() {
  document.body.classList.toggle("light");
}

/* Keyboard Support */
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || key === ".") {
    appendValue(key);
  }

  if (["+", "-", "*", "/"].includes(key)) {
    appendValue(key);
  }

  if (key === "Enter") {
    event.preventDefault();
    calculate();
  }

  if (key === "Backspace") {
    deleteLast();
  }

  if (key === "Escape") {
    clearDisplay();
  }
});
