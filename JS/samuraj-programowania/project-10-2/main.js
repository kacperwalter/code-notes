function x() {
    let number = 0;
    
    function y() {
        console.log(number);
    }

    return y
}

const example = x();

// example();

// Closure (domknięcie) to mechanizm, który pomaga nam uzyskać dostęp do danej wartości poza funkcją i gdy ta funkcja nie jest już aktywna.

// Closure - zmienna istnieje w innej funkcji, mimo, że funkcja, w której była stworzona ta zmienna nie jest już aktywna. 

//W pamieci programu zmienna istnieje jeśli prowadzi do niej referencja z innej funkcji. Mozemy mieć do niej dostęp, ale także je zmieniać. 

const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika to ${number}`;
    }
}

const counter = add(5);

document.addEventListener('click', counter);