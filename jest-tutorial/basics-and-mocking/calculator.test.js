// calculator.test.js
import Calculator from "./calculator";

describe("*** Calculator ***", () => {
  it("should be instanceable", () => {
    expect(new Calculator()).toBeInstanceOf(Calculator);
  });
  describe("add", () => {
    it("should add 2 numbers", () => {
      const calculator = new Calculator();
      expect(calculator.add(3, 2)).toBe(5);
    });
    it("should throw an Error if fewer than 2 arguments are supplied", () => {
      const calculator = new Calculator();
      expect(() => calculator.add(3)).toThrow("2 arguments are required");
    });
    it("should throw an error if arguments are not numbers", () => {
      const calculator = new Calculator();
      expect(() => calculator.add("2", {r:"r2"})).toThrow("Both arguments must be numbers");      
    });
  });
  describe("subtract", () => {
    it("should subtract first argument from the other", () => {
      const calculator = new Calculator();
      expect(calculator.subtract(100, 18)).toBe(82);
    });
  });
});
