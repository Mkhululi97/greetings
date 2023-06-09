function Greet(existingCounter) {
  let greetCounter = existingCounter || 0;
  let users = [];
  let usernameTrimmed = "";
  let errorMsg = "";
  let firstLetter, restOfLetters;
  const lettersOnlyRegex = /^[a-zA-Z]+$/;

  function peopleCounter(username) {
    usernameTrimmed = username.trim();
    if (lettersOnlyRegex.test(usernameTrimmed)) {
      if (!users.includes(usernameTrimmed.toLowerCase())) {
        greetCounter++;
        users.push(usernameTrimmed.toLowerCase());
      }
    }
  }
  function peopleGreeted() {
    return greetCounter;
  }
  function greetUserWithLanguage(language, username) {
    usernameTrimmed = username.trim();
    if (lettersOnlyRegex.test(usernameTrimmed)) {
      let arrName = usernameTrimmed.toLowerCase().split("");
      [firstLetter, ...restOfLetters] = arrName;
      let capitalizeName = firstLetter.toUpperCase() + restOfLetters.join("");
      if (language === "isiZulu") {
        return `Sawubona ${capitalizeName}`;
      } else if (language === "English") {
        return `Hello ${capitalizeName}`;
      } else if (language === "isiXhosa") {
        return `Molo ${capitalizeName}`;
      }
    } else {
      return "";
    }
  }
  function displayErrorMsg(username, language) {
    if (username === "") {
      errorMsg = "Please enter your name";
    }
    if (language === null) {
      errorMsg = "Please select a language";
    }
    if (username === "" && language === null) {
      errorMsg = "Please select a language and enter your name";
    }
    return errorMsg;
  }
  function nameWithNumberError(username) {
    usernameTrimmed = username.trim();
    if (!lettersOnlyRegex.test(usernameTrimmed)) {
      errorMsg = "Name should only contain letters";
      return errorMsg;
    }
  }
  function resetCounter() {
    return (greetCounter = 0);
  }

  return {
    peopleCounter,
    peopleGreeted,
    greetUserWithLanguage,
    displayErrorMsg,
    resetCounter,
    nameWithNumberError,
  };
}
