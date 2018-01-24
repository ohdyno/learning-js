function testFizzbuzz(Fizzbuzz) {
    let subject;

    beforeEach(() => {
        subject = new Fizzbuzz()
    });

    describe('fizzbuzz with single inputs', () => {
        test('any number divisible by three', () => {
            expect(subject.of(3)).toBe('fizz')
        });

        test('any number divisible by five', () => {
            expect(subject.of(5)).toBe('buzz')
        });

        test('any number divisible by five and divisible by three', () => {
            expect(subject.of(3 * 5)).toBe('fizzbuzz')
        });

        test('any number NOT divisible by five or divisible by three', () => {
            expect(subject.of(1)).toBe(1)
        });
    });

    describe('fizzbuzz with range inputs', () => {
        test('it outputs the results from calling fizzbuzz on integers from 1 to n, inclusive', () => {
            const logSpy = jest.fn();

            subject.fromOneTo(5, logSpy);

            expect(logSpy.mock.calls[0][0]).toBe(1);
            expect(logSpy.mock.calls[1][0]).toBe(2);
            expect(logSpy.mock.calls[2][0]).toBe('fizz');
            expect(logSpy.mock.calls[3][0]).toBe(4);
            expect(logSpy.mock.calls[4][0]).toBe('buzz')
        });
    });
}

module.exports = testFizzbuzz;