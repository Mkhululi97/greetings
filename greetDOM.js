const counterText = document.querySelector(".counter-text");
const errorText = document.querySelector(".error-text");
const greetingMsg = document.querySelector(".output-str");
const greetBtn = document.querySelector(".greet-me-btn");
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
}

greetBtn.addEventListener("click", greetings);
// localStorage.setItem('counter', greeting.peopleGreeted())
// counterText.innerHTML = localStorage.getItem('counter');

// localStorage.removeItem('counter');
// localStorage.clear();
