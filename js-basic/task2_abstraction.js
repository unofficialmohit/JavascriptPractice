class Multiply{
    calculate() { }
}

class Result extends Multiply {
    constructor(number1, number2) {
        super();
        this.number1 = number1;
        this.number2 = number2;

    }
    calculate() {
        return this.number1*this.number2;
    }
}

let Multi = new Result(5, 3);
console.log("Product of two values is ",Multi.calculate());

