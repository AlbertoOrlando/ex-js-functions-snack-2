function creaTimer(time) {
    return setTimeout(() => console.log("Tempo scaduto"), time)
}

const tempo = creaTimer(3000)

console.log(tempo);

