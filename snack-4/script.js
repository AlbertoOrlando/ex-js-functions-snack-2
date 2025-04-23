function creaTimer(time) {
    return setTimeout(() => console.log("Tempo scaduto"), time)
}

console.log(creaTimer(3000));

