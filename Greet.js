function Greet() {
  let username = "";
  function getName(name) {
    username = name;
  }
  function greetUser() {
    return `Hello ${username}`;
  }
  return {
    getName,
    greetUser,
  };
}
