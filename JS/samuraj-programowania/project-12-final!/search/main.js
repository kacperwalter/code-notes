// REPETITION

/// FILTER
const arr = [34, 2131, 32, 165, 23, 2351, 76675, 23];

// .filter => if elements returns true theyre added to new array/
const oddNumbers = arr.filter((number) => number % 2);
const evenNumbers = arr.filter((number) => !(number % 2));

// .map is returning new value
const double = arr.map(number => number * 2);

// .foreach not returing anything (operating on source element)
arr.forEach((number, index) => arr[index] = number * 2);

// SEARCH
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = [...document.querySelectorAll('li')];

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = liElements;
    // console.log(tasks);
    tasks = tasks.filter(li => li.textContent.toLocaleLowerCase().includes(searchText));
    console.log(tasks);
    ul.textContent="";
    tasks.forEach(li => ul.appendChild(li));
}

input.addEventListener('input', searchTask)