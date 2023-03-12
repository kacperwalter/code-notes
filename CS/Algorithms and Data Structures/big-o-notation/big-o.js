const nemo = ['nemo'];

function findNemo(array) {
    let t0 = performance.now(); // starting timer to measure time of the runtime
    for (let i  = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now();
    console.log(`Calling this function took ${t1 - t0} milliseconds`);
}

findNemo(nemo);

// code above is running - the running of the code is called RUNTIME. 
// how to measure big O/efficiency of this code? 