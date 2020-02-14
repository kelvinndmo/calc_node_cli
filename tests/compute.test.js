const {add, substract, multiplication, division,modulo} = require("../compute")

test('should add two number and return sum', () => {
    const sum = add(10, 10)
    expect(sum).toEqual('sum is 20')
});

test('should substract two number and return difference', () => {
    const difference = substract(20, 10)
    expect(difference).toEqual(10)
});

test('should divide two number are return result', () => {
    const result = division(20,10)
    expect(result).toEqual(2)
});

test('should multiplication of two numbers', () => {
    const multiply = multiplication(2,2)
    expect(multiply).toBe(4)
});

test('should return modulo', () => {
    const modulus = modulo(5,2)
    expect(modulus).toBe(1)
});