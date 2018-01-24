const fizzbuzz = require('../main/fizzbuzz');

describe('fizzbuzz with single inputs', function () {
    test('any number divisible by three', function () {
        expect(fizzbuzz(3)).toBe('fizz')
    });

    test('any number divisible by five', function () {
        expect(fizzbuzz(5)).toBe('buzz')
    });

    test('any number divisible by five and divisible by three', function () {
        expect(fizzbuzz(3 * 5)).toBe('fizzbuzz')
    });

    test('any number NOT divisible by five or divisible by three', function () {
        expect(fizzbuzz(2)).toBe(2)
    });
});