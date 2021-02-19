const addNumbers = (...numbers) => {
    // console.log(numbers);
    return numbers.reduce((sum, value) => sum + value);
}

// moduł, czyli osobny plik JS zwraca defaultowo module.exports = {}
module.exports = addNumbers;