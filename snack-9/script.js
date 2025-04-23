// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo. Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

const operazioni = [
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
]

function sequenzaOperazioni(arr, intervallo) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            const elementoiesimo = arr[i]
            elementoiesimo() // esegue la singola operazione (ovvero esegue le funzioni presente nell'array)
            if (i === arr.length - 1) {
                console.log('finito');
            }
        }, intervallo * i) // ritardo in base all'indice
    }
}

sequenzaOperazioni(operazioni, 2000)