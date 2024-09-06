interface Calculation {
    INDICE: number;
    SOMA: number;
    K: number;
}

let Calculations: Calculation = {
    INDICE: 13,
    SOMA: 0,
    K: 0
};

while (Calculations.K < Calculations.INDICE) {
    Calculations.K = Calculations.K + 1;
    Calculations.SOMA = Calculations.SOMA + Calculations.K;
}

console.log(Calculations.SOMA); // O valor de SOMA será 91