describe("Testing Greet Factory Function", function () {
  it("should return 'Hello Mkhululi', 'Hello Londeka', 'Hello Mashoto', 'Hello Akhona'", function () {
    let greet = Greet();
    greet.greetUser("Mkhululi");
    assert.equal("Hello Mkhululi", greet.greetUser("Mkhululi"));
    assert.equal("Hello Londeka", greet.greetUser("Londeka"));
    assert.equal("Hello Mashoto", greet.greetUser("Mashoto"));
    assert.equal("Hello Akhona", greet.greetUser("Akhona"));
  });

  it("should return how many user's have been greeted", function () {
    let greet = Greet();
    greet.greetUserWithLanguage("isiZulu", "Mkhululi");
    greet.greetUserWithLanguage("isiZulu", "Thembakazi");
    greet.greetUserWithLanguage("English", "Akhona");
    greet.greetUserWithLanguage("English", "Mashoto");
    greet.greetUserWithLanguage("English", "Londeka");
    greet.greetUserWithLanguage("isiXhosa", "Mashoto");
    greet.greetUserWithLanguage("isiXhosa", "Londeka");
    assert.equal(5, greet.peopleGreeted());
    greet.greetUserWithLanguage("English", "Thando");
    greet.greetUserWithLanguage("English", "Mpukeng");
    assert.equal(7, greet.peopleGreeted());
  });

  it("should greet user in the language they selected", function () {
    let greet = Greet();
    assert.equal(
      "Sawubona Mkhululi",
      greet.greetUserWithLanguage("isiZulu", "Mkhululi")
    );
    assert.equal(
      "Sawubona Londeka",
      greet.greetUserWithLanguage("isiZulu", "Londeka")
    );
    assert.equal(
      "Sawubona Mashoto",
      greet.greetUserWithLanguage("isiZulu", "Mashoto")
    );
    assert.equal(
      "Sawubona Akhona",
      greet.greetUserWithLanguage("isiZulu", "Akhona")
    );
    assert.equal(
      "Hello Akhona",
      greet.greetUserWithLanguage("English", "Akhona")
    );
    assert.equal(
      "Molo Mashoto",
      greet.greetUserWithLanguage("isiXhosa", "Mashoto")
    );
  });
});
