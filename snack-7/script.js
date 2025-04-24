function eseguiEFerma(mes, time, stop) {
    const intervallo = setInterval(() => {
        console.log(mes);
    }, time);

    setTimeout(() => {
        clearInterval(intervallo);
        console.log("messaggio interrotto");
    }, stop);
}

eseguiEFerma("bella", 1000, 10000)