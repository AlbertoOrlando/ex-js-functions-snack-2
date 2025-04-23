const somma = (num1, num2) => num1 + num2;
const moltiplicazione = (num1, num2) => num1 * num2;

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2)

console.log(eseguiOperazione(5, 5, somma));
console.log(eseguiOperazione(5, 5, moltiplicazione));

