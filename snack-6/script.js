function creaContatoreAutomatico(time) {
    let contatore = 0
    return setInterval(() => {
        contatore += 1;
        console.log("contatore " + contatore)
    }, time)
}

const tempoDiAumento = creaContatoreAutomatico(2000)

setTimeout(() => {
    clearInterval(tempoDiAumento); console.log("contatore fermato");
}, 10000)


