function Greet(existingCounter) {
  let greetCounter = existingCounter || 0;
  let users = [];
  let errorMsg = "";
  function peopleCounter(username) {
    if (!users.includes(username.toLowerCase())) {
      greetCounter++;
      users.push(username.toLowerCase());
    }
  }
  function peopleGreeted() {
    return greetCounter;
  }
  function greetUserWithLanguage(language, username) {
    let arrName = username.split("");
    [firstLetter, ...restOfLetters] = arrName;
    let capitalizeName = firstLetter.toUpperCase() + restOfLetters.join("");
    if (language === "isiZulu") {
      return `Sawubona ${capitalizeName}`;
    } else if (language === "English") {
      return `Hello ${capitalizeName}`;
    } else if (language === "isiXhosa") {
      return `Molo ${capitalizeName}`;
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
  function resetCounter() {
    return (greetCounter = 0);
  }

  return {
    peopleCounter,
    peopleGreeted,
    greetUserWithLanguage,
    displayErrorMsg,
    resetCounter,
  };
}
