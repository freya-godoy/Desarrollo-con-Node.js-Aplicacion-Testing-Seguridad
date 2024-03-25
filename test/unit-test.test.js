const { assert } = require("chai");
//import { assert } from "chai";

function addValue(num1, num2) {
  return num1 + num2;
}

describe("Suite de pruebas para la API", () => {
  it("Espero un 10", () => {
    let data = addValue(5, 5);
    assert.equal(data, 10);
  });
});
