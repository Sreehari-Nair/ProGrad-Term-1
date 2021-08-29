// nav
function classToggle() {
  const navs = document.querySelectorAll(".navbar_items");

  navs.forEach((nav) => nav.classList.toggle("navbar__ToggleShow"));
}

document
  .querySelector(".navbar_link-toggle")
  .addEventListener("click", classToggle);

// end-nav
var select = document.getElementById("age");
var options = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9","10", "11", "12", "13", "14", "15", "16", "17"];
for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

function calculateBmi() {
  var weight = document.bmiForm.weight.value;
  var height = document.bmiForm.height.value;

  if (weight > 0 && height > 0) {
    var finalBmi = [weight / height / height] * 10000;
    document.bmiForm.bmi.value = finalBmi;

    if (finalBmi < 14.9) {
      document.bmiForm.meaning.value = "That you are too thin.";
    }
    if (finalBmi > 14.9 && finalBmi < 18.6) {
      document.bmiForm.meaning.value = "That you are healthy.";
    }
    if (finalBmi > 18.6 && finalBmi < 19.5) {
      document.bmiForm.meaning.value = "That you have overweight.";
    }
    if (finalBmi > 19.5) {
      document.bmiForm.meaning.value = "That you have Obese.";
    }
    else {
        alert("Please Fill in everything correctly");
  } 
  }
}