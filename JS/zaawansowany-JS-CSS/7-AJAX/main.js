const testFetch = (e) => {
  e.preventDefault(); // ciągle o tym zapominam - jest to potrzebne ponieważ po każdym submit odświeża się strona 
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


const getUsers = (e) => {
  e.preventDefault();

  const usersNumber = document.querySelector('[name="users-number"]').value;
  const usersGender = document.querySelector('[name="gender"]').value;
  
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;

  fetch(url)
    .then(response => {
    if (response.status !== 200) {
      throw Error("Not 200");
    } else {
      return response.json(); // tworzy się obiekt do którego właściwości możemy się odwłowywać
    }
  })
  .then(json => showUsers(json.results))
  .catch(err => console.log(err))
}

const showUsers = (users) => {
  const resultArea = document.querySelector('.user-list');
  users.forEach((user) => {
    const item = document.createElement('div');
    item.className = "user";
    item.innerHTML = `
    <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
    <img class="user__image" src="${user.picture.medium}">
    `
    resultArea.appendChild(item);
  });
}
 
document.querySelector(".generator").addEventListener('submit', getUsers);