class Javabuzz {
    _isDivisibleBy(divisor, number) {
        return (number % divisor === 0);
    }

    says(number) {
        if (this._isDivisibleBy(15, number)) {
            return 'JavaBuzz';

        } else if (this._isDivisibleBy(3, number)) {
            return 'Java';
        
        } else if (this._isDivisibleBy(5, number)) {
            return 'Buzz';

        } else {
            return number;
        }
    }
}