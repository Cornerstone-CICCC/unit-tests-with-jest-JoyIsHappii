import { add, divide, capitalize } from "../src/utils.js";

describe('add(a, b)', () => {

    test('returns 5 for add(2, 3)', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('returns 3 for add(-2, 5)', () => {
        expect(add(-2, 5)).toBe(3);
    });

    test('returns 0 for add(0, 0)', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('throws TypeError for add("2", 3)', () => {
        expect(() => add("2", 3)).toThrow(TypeError);
    });

    // Extra Credit: Test with decimal numbers
    test('returns 4 for add(1.5, 2.5)', () => {
        expect(add(1.5, 2.5)).toBe(4);
    });

});


describe('divide(a, b)', () => {

    test('returns 5 for divide(10, 2)', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('returns 1.5 for divide(3, 2)', () => {
        expect(divide(3, 2)).toBe(1.5);
    });

    test('throws Error for divide(1, 0)', () => {
        expect(() => divide(1, 0)).toThrow(Error);
    });

    test('throws TypeError for divide("10", 2)', () => {
        expect(() => divide("10", 2)).toThrow(TypeError);
    });

    // Extra Credit: Test division with decimal result
    test('returns 2.5 for divide(5, 2)', () => {
        expect(divide(5, 2)).toBe(2.5);
    });

});


describe('capitalize(str)', () => {

    test('returns "Hello" for capitalize("hello")', () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    test('returns "Hello" for capitalize("Hello")', () => {
        expect(capitalize("Hello")).toBe("Hello");
    });

    test('returns "" for capitalize("")', () => {
        expect(capitalize("")).toBe("");
    });

    test('throws TypeError for capitalize(123)', () => {
        expect(() => capitalize(123)).toThrow(TypeError);
    });

    // Extra Credit: Test with single character
    test('returns "A" for capitalize("a")', () => {
        expect(capitalize("a")).toBe("A");
    });

});
