let displayResult = document.getElementById("display-results");
let resultbtn = document.getElementById("result-btn");
let textResult = document.querySelector(".text-result");

// Required = (Goal - Current * (100% - Final Weight))/Final Weight

resultbtn.addEventListener("click", () => {
  const currGrade = document.getElementById("calc-grade-current").value;
  const desiredGrade = document.getElementById("calc-grade-desired").value;
  const finalWeight = document.getElementById("calc-grade-weight").value;

  const requiredGrade = calcRequiredGrade(currGrade, desiredGrade, finalWeight);
  if (currGrade == "" || desiredGrade == "" || finalWeight == "") {
    alert("Invalid Input! Please Fill in Each Required Field!");
  } else {
    textResult.textContent = `${requiredGrade}`;
  }
});

function calcRequiredGrade(gCurrent, gDesired, fWeight) {
  const reqGrade =
    ((gDesired - gCurrent * ((100 - fWeight) / 100)) / fWeight) * 100;
  return parseFloat(reqGrade).toPrecision(3);
}
