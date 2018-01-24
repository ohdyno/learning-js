let fizzbuzz = function (number) {
    if (number % (3 * 5) === 0)
        return 'fizzbuzz';

    if (number % 3 === 0)
        return 'fizz';

    if (number % 5 === 0)
        return 'buzz';

    return number
};

let fizzbuzzFromOneTo = function (number, output) {
    for (let i = 1; i <= number; i++) {
        output(this.of(i))
    }
};

export {fizzbuzz as of, fizzbuzzFromOneTo as fromOneTo}