function creaContatoreAutomatico(time) {
    let contatore = 0
    return () => {
        const intervallo = setInterval(() => {
            contatore += 1;
            console.log("contatore " + contatore)
        }, time)
        setTimeout(() => {
            clearInterval(intervallo); console.log("contatore fermato");
        }, 10000)
    }
}

const tempoDiAumento = creaContatoreAutomatico(2000)
tempoDiAumento()




