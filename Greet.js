function Greet(existingCounter) {
  let greetCounter = existingCounter || 0;
  let users = [];

  function peopleGreeted() {
    return greetCounter;
  }
  function greetUserWithLanguage(language, username) {
    if (language === "isiZulu") {
      return `Sawubona ${username}`;
    } else if (language === "English") {
      return `Hello ${username}`;
    } else if (language === "isiXhosa") {
      return `Molo ${username}`;
    }
  }
  return {
    peopleGreeted,
    greetUserWithLanguage,
  };
}

/*

 if (!users.includes(username)) {
      greetCounter++;
      users.push(username);
    }

else {
    greetingMsg.innerHTML = "Please enter your name and select a language";
  }
*/
