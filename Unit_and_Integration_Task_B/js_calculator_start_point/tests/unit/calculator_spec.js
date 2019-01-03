var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should add one number to another', function() {
    calculator.previousTotal = 4;
    const sum = calculator.add(1);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  });

  it('should take one number from another', function() {
    calculator.previousTotal = 7;
    const sum = calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  });

  it('should multiply one number by another', function() {
    calculator.previousTotal = 3;
    const sum = calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  });

  it('should divide one number by the other', function() {
    calculator.previousTotal = 21;
    const sum = calculator.divide(3);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 7);
  });

  it('should concatenate multiple number button clicks', function() {
    calculator.numberClick(3);
    calculator.numberClick(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 35);
  });

  it('should chain multiple operations together', function() {
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 8);
  });

  it('should clear the running total without affecting the calculation', function() {
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 8);
  });

});
