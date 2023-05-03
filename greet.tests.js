describe("Testing Greet Factory Function", function () {
  it("should return 'Hello Mkhululi', 'Hello Londeka', 'Hello Mashoto', 'Hello Akhona'", function () {
    let greet = Greet();
    greet.getName("Mkhululi");
    assert.equal("Hello Mkhululi", greet.greetUser());

    greet.getName("Londeka");
    assert.equal("Hello Londeka", greet.greetUser());

    greet.getName("Mashoto");
    assert.equal("Hello Mashoto", greet.greetUser());

    greet.getName("Akhona");
    assert.equal("Hello Akhona", greet.greetUser());
  });
});
