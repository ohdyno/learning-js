const fizzbuzz = require('../main/fizzbuzz');

describe('fizzbuzz with single inputs', function () {
    test('any number divisible by three', function () {
        expect(fizzbuzz.of(3)).toBe('fizz')
    });

    test('any number divisible by five', function () {
        expect(fizzbuzz.of(5)).toBe('buzz')
    });

    test('any number divisible by five and divisible by three', function () {
        expect(fizzbuzz.of(3 * 5)).toBe('fizzbuzz')
    });

    test('any number NOT divisible by five or divisible by three', function () {
        expect(fizzbuzz.of(1)).toBe(1)
    });
});

describe('fizzbuzz with range inputs', function () {
    test('it outputs the results from calling fizzbuzz on integers from 1 to n, inclusive', function () {
        const logSpy = jest.fn();

        fizzbuzz.fromOneTo(5, logSpy);

        expect(logSpy.mock.calls[0][0]).toBe(1);
        expect(logSpy.mock.calls[1][0]).toBe(2);
        expect(logSpy.mock.calls[2][0]).toBe('fizz');
        expect(logSpy.mock.calls[3][0]).toBe(4);
        expect(logSpy.mock.calls[4][0]).toBe('buzz')
    });
});