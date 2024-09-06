// Definindo a string de entrada
const inputString: string = "targetsistemas";

// Função para inverter os caracteres da string
function reverseString(str: string): string {
    let reversedStr: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

// Chamando a função e imprimindo o resultado
const invertedString: string = reverseString(inputString);
console.log(invertedString);