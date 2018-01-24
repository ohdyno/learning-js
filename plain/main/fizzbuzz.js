class Fizzbuzz {
    of(number) {
        if (number % (3 * 5) === 0)
            return 'fizzbuzz';

        if (number % 3 === 0)
            return 'fizz';

        if (number % 5 === 0)
            return 'buzz';

        return number
    }

    fromOneTo(number, output) {
        for (let i = 1; i <= number; i++) {
            output(this.of(i))
        }
    }
}

module.exports = Fizzbuzz;