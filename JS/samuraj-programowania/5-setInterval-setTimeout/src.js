// setTimeout

// in setTimeout we specify function to execute and number of miliseconds and the program awaits specified number of miliseconds and then executes the function

const simpleSetTimeout = () => {
    setTimeout(bye, 3000);

    console.log('hello');

    function bye() {
        console.log('goodbye');
    }
}

// simpleSetTimeout();


// stop the function from running after setTimeout is called

const stopSetTimeout = () => {
    const timeoutID = setTimeout('byle', 3000);
    
    console.log('hello');

    clearTimeout(timeoutID);

    function bye() {
        console.log('goodbye');
    }
}

// stopSetTimeout();



// setInterval

// similar to setTimeout but the program will execute continuously waiting the specified number of miliseconds

const setIntervalTimer = () => {
    let count = 0;
    let intID = setInterval(counter, 100);

    function counter() {
        console.log(++count);
        // we can also stop interval using clearInterval
        if (count >= 20) {
            clearInterval(intID);
        }
    }
}

setIntervalTimer();