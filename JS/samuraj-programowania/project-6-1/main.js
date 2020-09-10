const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

// generate random numbers (Math.random() generates floats from 0 to 1 so it needs to be multipled by number we want (here is 7 for example))
const random1 = Math.random() * 7; // gnerates for example 1.00023954710389475
// rounding a number
const random2 = Math.floor(Math.random() * 7);

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

// console.log(names[index]);

const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    const randomTtext = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[randomTtext]}, że najlepsze imię to ${names[index]}`;
}

btn.addEventListener('click', nameGenerator)