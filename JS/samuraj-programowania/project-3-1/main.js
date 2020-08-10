// tutaj rozwiązanie
const liElements = document.getElementsByTagName('li');
const liElementsArray = Array.from(liElements);
const btn = document.querySelector('button');

let size = 10;

// COMMENT ONE BEFORE USE

// using for loop
btn.addEventListener('click', function(){
    for(let i = 0; i < liElementsArray.length; i++) {
        liElementsArray[i].style.display = 'block';
        liElementsArray[i].style.fontSize = size + 'px';
    }
    size += 1;
});

// using forEach - proper way
btn.addEventListener('click', function() {
    liElementsArray.forEach(function(element) {
        element.style.display = 'block';
        element.style.fontSize = size + 'px';
    });
    size++;
});