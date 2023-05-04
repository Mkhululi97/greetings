function Greet() {
  let greetCounter = 0;
  let users = [];

  function peopleGreeted() {
    return greetCounter;
  }
  function greetUserWithLanguage(language, username) {
    if (!users.includes(username)) {
      greetCounter++;
      users.push(username);
    }
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
