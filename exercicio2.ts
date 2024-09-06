function isFibonacciNumber(num: number): boolean {
    let numberA = 0;
    let numberB = 1;

    while (numberB < num) {
        const temp = numberB;
        numberB = numberA + numberB;
        numberA = temp;
    }

    return numberB === num;
}

const numberToCheck = 13; // Substitua pelo número que você deseja verificar
const fibonacci = isFibonacciNumber(numberToCheck);

if (fibonacci) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}