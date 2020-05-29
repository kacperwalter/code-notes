const i = 5;

const andrzej = (number) => {
    return number;
}

console.log(andrzej(i));

const mariusz = () => {
    for(let i=1; i=i+1; i++){
        console.log(i);
    }
}


let iterating = 0;

const iterateLoop = () => {
    for(let i = 0; i <= 10; i++){
        iterating++;
        console.log(iterating);
    }
}
iterateLoop();
console.log('fuck')