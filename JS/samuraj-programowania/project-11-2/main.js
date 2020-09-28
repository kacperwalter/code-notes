const endTime = new Date('2021-01-25 22:34:00').getTime();

setInterval(() => {
    const nowTime = new Date().getTime();
    const time = Math.floor((endTime - nowTime) / 1000);
    console.log(time);
}, 1000)