function contoAllaROvescia(num) {
    const intervallo = setInterval(() => {
        console.log("il contatore è a " + num);

        if (num == 0) {
            clearInterval(intervallo)
            console.log("conto alla rovescia terminato");

        }
        num -= 1;
    }, 1000);
}

contoAllaROvescia(5)