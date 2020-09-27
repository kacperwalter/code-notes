const clock = () => {
    const time = new Date();
    // console.log(time.toLocaleString());
    // console.log(time.toLocaleDateString());

    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const hours = time.getHours();

    document.querySelector(".clock span").textContent = `${hours}:${minutes}:${seconds}`;
}

clock();
setInterval(clock, 1000);





