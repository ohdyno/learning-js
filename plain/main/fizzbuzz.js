function fizzbuzz(number) {
    if (number % (3 * 5) === 0)
        return 'fizzbuzz';

    if (number % 3 === 0)
        return 'fizz';

    if (number % 5 === 0)
        return 'buzz';

    return number
}

function fizzbuzzFromOneTo(number, output) {
    for (var i = 1; i <= number; i++) {
        output(fizzbuzz(i))
    }
}

module.exports = {
    fizzbuzz: fizzbuzz,
    fizzbuzzFromOneTo: fizzbuzzFromOneTo
};