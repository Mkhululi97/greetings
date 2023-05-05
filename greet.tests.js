describe("Testing Greet Factory Function", function () {
  it("should return how many user's have been greeted", function () {
    let greet = Greet();
    greet.peopleCounter("Mkhululi");
    greet.peopleCounter("Mkhululi");
    greet.peopleCounter("Thembakazi");
    greet.peopleCounter("Akhona");
    greet.peopleCounter("Mashoto");
    greet.peopleCounter("Londeka");
    greet.peopleCounter("Mashoto");
    greet.peopleCounter("Londeka");
    assert.equal(5, greet.peopleGreeted());
    greet.peopleCounter("Thando");
    greet.peopleCounter("Mpukeng");
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
  describe("Shows Error Message", function () {
    it("if the input field is empty", function () {
      let greet = Greet();
      assert.equal(
        "Please enter your name",
        greet.displayErrorMsg("", "isiZulu")
      );
      assert.equal(
        "Please select a language",
        greet.displayErrorMsg("Mkhululi", null)
      );
      assert.equal(
        "Please select a language and enter your name",
        greet.displayErrorMsg("", null)
      );
    });
  });
});
