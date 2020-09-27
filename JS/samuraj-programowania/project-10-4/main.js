const timer = () => {
    seconds = 0;

    return () => {
        seconds++;
        document.body.textContent = `${seconds} sekund`
    }
}

setInterval(timer(), 1000);