describe("Testing Greet Factory Function", function () {
  it("should return 'Hi Mkhululi'", function () {
    let greetPerson = Greet();

    assert.equal("Mkhululi", greetPerson.getName("Mkhululi"));
  });
});
