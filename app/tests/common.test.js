const chai = require("chai");
const { testHello, mathMultiply, mathAdd } = require("../normalController");
/**
 * jalanin "npm run test" kalo mau jalanin semua test files
 * jalanin "npm run test "./app/tests/" -- --exit --grep "Simple Math Test" " kalo mau jalanin per describe test
 * jalanin "npm run test "./app/tests/" -- --exit --grep "should return 4" " kalo mau jalanin per it test
 *
 */

describe("App testing", () => {
  it("should return `hello wak`", () => {
    chai.assert.equal(testHello(), "hello wak");
  });
});

describe("Simple Math Test", () => {
  it("should return 4", () => {
    let result = 8 / 2;
    chai.expect(result).to.equal(4);
  });

  it("should return 9", () => {
    let result = 3 * 3;
    chai.expect(result).to.equal(9);
  });
});

describe("Async/Await mathematic operation", () => {
  it("multiply should return 25", async () => {
    const result = await mathMultiply(5, 5);
    chai.expect(result).to.equal(25);
  });

  it("add should return 10", async () => {
    const result = await mathAdd(5, 5);
    chai.expect(result).to.equal(10);
  });

  it("should throw an error", async () => {
    try {
      await mathAdd(5);
    } catch (err) {
      console.log({ err });
      chai.expect(err).to.equal("missing");
    }
  });
});
