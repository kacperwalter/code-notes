const getUsers = () => {
  const url = 'https://randomuser.me/api/?results=10';
  fetch(url) // obietnica - oczekujący (pending)
  // kiedy obietnica zostanie rozstrzygnięta (spełnione lub odrzucone)
  // pozytywnie - wykonuje się then, negatywnie - wykonuje się catch
    .then((response) => { // kolejna obietnica (promise)
      // console.log(response)
      if (response.status !== 200) {
        throw Error("to nie jest odpowiedź 200");
      } else {
        return response.json();
      }
    })
    .then(json => console.log(json))
    .catch((err) => console.log(err))
}
 
document.querySelector("button").addEventListener('click', getUsers);