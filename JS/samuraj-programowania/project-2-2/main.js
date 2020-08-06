const bar = document.createElement('div');

size = 100;
flag = true;

bar.style.height = size + "px";

document.body.appendChild(bar);

window.addEventListener('scroll', function(){
    if (size >= window.innerHeight / 2) {
        flag = !flag;
    } else if (size == 0){
        flag = true;
    }

    if (flag) {
        size += 10;
        bar.style.height = size + "px";
        bar.style.backgroundColor = 'black';   
    } else if (flag == false) {
        size -= 10;
        bar.style.height = size + "px";
        bar.style.backgroundColor = 'gray';
    }
})