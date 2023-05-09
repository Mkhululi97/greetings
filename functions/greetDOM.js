const counterText = document.querySelector(".counter-text");
const errorText = document.querySelector(".error-text");
const greetingMsg = document.querySelector(".output-str");
const greetBtn = document.querySelector(".greet-me-btn");
const resetBtn = document.querySelector(".reset-btn");
greetingMsg.innerHTML = "";
let existingCounter = 0;

if (window.localStorage.getItem("counter") || 0) {
  existingCounter = localStorage.getItem("counter");
  counterText.innerHTML = existingCounter;
}
const greeting = Greet(existingCounter);

function greetings() {
  let currentLanguage = "";
  let selectedRadioBtn = document.querySelector(".radio-btn:checked");
  let username = document.querySelector(".text-input").value;

  if (username !== "" && selectedRadioBtn !== null) {
    greeting.peopleCounter(username);
    currentLanguage = selectedRadioBtn.value;
    greetingMsg.innerHTML = greeting.greetUserWithLanguage(
      currentLanguage,
      username
    );
    counterText.innerHTML = greeting.peopleGreeted();
    localStorage.setItem("counter", greeting.peopleGreeted());
    errorText.innerHTML = greeting.nameWithNumberError(username);
    if (
      errorText.classList.contains("hidden") &&
      greeting.nameWithNumberError(username) !== undefined
    ) {
      errorText.classList.remove("hidden");
      setTimeout(function () {
        errorText.classList.add("hidden");
      }, 2500);
    }
    // errorText.classList.add("hidden");
    setTimeout(function () {
      greetingMsg.innerHTML = "";
    }, 3000);
  } else {
    errorText.classList.remove("hidden");
    errorText.innerHTML = greeting.displayErrorMsg(username, selectedRadioBtn);
    setTimeout(function () {
      errorText.classList.add("hidden");
    }, 2500);
  }
  if (selectedRadioBtn.checked === true && username !== "") {
    let clearUsername = document.querySelector(".text-input");
    clearUsername.value = "";
    selectedRadioBtn.checked = false;
  }
}

greetBtn.addEventListener("click", greetings);
resetBtn.addEventListener("click", function () {
  greeting.resetCounter();
  counterText.innerHTML = greeting.resetCounter();
  localStorage.clear();
});
