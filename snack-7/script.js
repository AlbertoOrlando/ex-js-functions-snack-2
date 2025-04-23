function eseguiEFerma(mes, stop, time) {
    setTimeout(() => {
        const intervallo = setInterval(() => {
            console.log(mes);
        }, 1000);

        setTimeout(() => {
            clearInterval(intervallo);
            console.log("messaggio interrotto");
        }, stop);
    }, time)
}

eseguiEFerma("bella", 10000, 1000)