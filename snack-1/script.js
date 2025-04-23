console.log(somma(5, 6));

function somma(num1, num2) {
    return num1 + num2
}

const sommaAnonima = function (num1, num2) {
    return num1 + num2
}

console.log(sommaAnonima(4, 3));

const sommaArrow = (num1, num2) => num1 + num2;

console.log(sommaArrow(3, 5));
