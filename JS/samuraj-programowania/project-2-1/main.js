const square = document.createElement('div');
document.body.appendChild(square);
let size = 100; // size of square
let grow = true;

square.style.backgroundColor = "black";
square.style.width = size +"px";
square.style.height = size +"px";

// maximum square size 
// window.innerWidyh * 0.5 

window.addEventListener('scroll', function(){
    if(size >= window.innerWidth * 0.5) {
        grow = !grow;
    } else if (size == 0) {
        grow = true;
    }

    if (grow) {
        size += 10;
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        size -= 10;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
});