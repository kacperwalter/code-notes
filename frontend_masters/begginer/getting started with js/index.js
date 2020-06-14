const people = ['Marek', 'Kacper', 'Zosia', 'Patryk'];

const isEnrolled = (person) => {
  if (people.includes(person)) {
    return true;
  } else {
    return false;
  }
}

const iterator1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const iterator2 = (arr) => {
  for (let person of arr) {
    console.log(person);
  }
}
