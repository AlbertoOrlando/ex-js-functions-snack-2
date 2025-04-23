function stampaOgniSecondo(mes) {
    return setInterval(() => console.log(mes), 1000)
}
const stampa = stampaOgniSecondo("ciao")

console.log(stampa);

setTimeout(() => {
    clearInterval(stampa)
    console.log("stoppato")
}, 5000)