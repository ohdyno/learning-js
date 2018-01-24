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
    for (let i = 1; i <= number; i++) {
        output(fizzbuzz(i))
    }
}

export {fizzbuzz as of, fizzbuzzFromOneTo as fromOneTo}