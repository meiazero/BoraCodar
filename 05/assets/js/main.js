const buttons = document.querySelectorAll("button");
const display = document.getElementById("expression");
const result = document.getElementById("resultValue");

let expression = [];
let operators = ["+", "-", "×", "÷", "%"];
let resultExp;
let elements = [];
let symbol = [];

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		const value = event.target.value;

		if (value == "clear-all") {
			display.textContent = "";
			expression = [];
		} else if (value == "clear-error") {
			expression.pop();
		} else if (value == operators[button]) {
			expression.push(value);
		} else {
			expression.push(value);
		}

		display.textContent = expression.join("");
		elements = expression.join("").split(/×|÷|\+|-/);
		symbol = expression.join("").split(/[0-9]/).filter(Boolean);

		for (let i = 0; i < elements.length; i++) {
			if (symbol[i] == "×") {
				resultExp = parseInt(elements[i]) * parseInt(elements[i + 1]);
				elements.splice(i, 2, resultExp);
				symbol.splice(i, 1);
				i--;
				result.textContent = resultExp;
			} else if (symbol[i] == "÷") {
				resultExp = parseInt(elements[i]) / parseInt(elements[i + 1]);
				elements.splice(i, 2, resultExp);
				symbol.splice(i, 1);
				i--;
				result.textContent = parseFloat(resultExp.toFixed(3)) ?? elements[i];
			} else if (symbol[i] == "-") {
				resultExp = parseInt(elements[i]) - parseInt(elements[i + 1]);
				elements.splice(i, 2, resultExp);
				symbol.splice(i, 1);
				i--;
				result.textContent = resultExp;
			} else if (symbol[i] == "+") {
				resultExp = parseInt(elements[i]) + parseInt(elements[i + 1]);
				elements.splice(i, 2, resultExp);
				symbol.splice(i, 1);
				i--;
				result.textContent = resultExp || elements[i - 1];
			} else {
				result.textContent = elements[i] || elements[i - 1];
			}
		}
	});
});
