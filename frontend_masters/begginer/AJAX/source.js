const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);

promise //function runs whenever promis is resolved - needs time to back from server (this is async)
  .then(function(response) { // it comes as a block of text to resolve it
    const processingPromise = response.json(); // parsing to object i can use (giving another promis)
    return processingPromise; // returning another promise (promise chaining)
  })
  .then(function(processedResponse) {
    console.log(processedResponse);
  });

console.log("this will log first");