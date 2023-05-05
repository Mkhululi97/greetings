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
  const username = document.querySelector("input").value;

  if (username !== "" && selectedRadioBtn !== null) {
    greeting.peopleCounter(username);
    currentLanguage = selectedRadioBtn.value;
    greetingMsg.innerHTML = greeting.greetUserWithLanguage(
      currentLanguage,
      username
    );
    counterText.innerHTML = greeting.peopleGreeted();
    localStorage.setItem("counter", greeting.peopleGreeted());
    errorText.classList.add("hidden");
  } else {
    errorText.classList.remove("hidden");
    errorText.innerHTML = greeting.displayErrorMsg(username, selectedRadioBtn);
  }
  console.log(greeting.peopleGreeted());
}

greetBtn.addEventListener("click", greetings);
resetBtn.addEventListener("click", function () {
  greeting.resetCounter();
  counterText.innerHTML = greeting.resetCounter();
  localStorage.clear();
});
// localStorage.setItem('counter', greeting.peopleGreeted())
// counterText.innerHTML = localStorage.getItem('counter');

// localStorage.removeItem('counter');
