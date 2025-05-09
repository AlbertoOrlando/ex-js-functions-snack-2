// Creare un throttler per limitare l’esecuzione di una funzione

// Scrivi una funzione creaThrottler che accetta una funzione e un tempo limite. Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)

function creaThrottler(fn, limite) {
    let inAttesa = false;

    return function () {
        // è uguale a inAttesa === false
        if (!inAttesa) {
            fn();
            inAttesa = true;
            setTimeout(() => {
                inAttesa = false;
            }, limite);
        }
    };
}