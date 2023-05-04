const counterText = document.querySelector(".counter-text");
const greetingMsg = document.querySelector(".output-str");
const greetBtn = document.querySelector(".greet-me-btn");
const greeting = Greet();
greetingMsg.innerHTML = "";

function greetings() {
  let currentLanguage = "";
  let selectedRadioBtn = document.querySelector(".radio-btn:checked");
  const username = document.querySelector("input").value;
  if (username !== "" && username !== null) {
    currentLanguage = selectedRadioBtn.value;
    greetingMsg.innerHTML = greeting.greetUserWithLanguage(
      currentLanguage,
      username
    );
    counterText.innerHTML = greeting.peopleGreeted();
  } else {
    greetingMsg.innerHTML = "Please enter your name and select a language";
  }
}

greetBtn.addEventListener("click", greetings);
