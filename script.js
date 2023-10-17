const calculateBtn = document.getElementById("calculate-btn");
const bmiResult = document.getElementById("bmi-result");
const conditionElement = document.getElementById("condition");

function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);

    if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        bmiResult.value = bmi.toFixed(2);

        if (bmi < 18.5) {
            conditionElement.textContent = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            conditionElement.textContent = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            conditionElement.textContent = "Overweight";
        } else {
            conditionElement.textContent = "Obesity";
        }
    } else {
        alert("Please enter valid height and weight values.");
    }
}

calculateBtn.addEventListener("click", calculateBMI);
