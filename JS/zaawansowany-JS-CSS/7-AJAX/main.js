const getUsers = () => {
  const url = 'https://randomuser.me/api/?results=10'
  fetch(url)
    .then((reponse) => console.log(reponse))
    .catch((err) => console.log(err))
}
 
document.querySelector("button").addEventListener('click', getUsers);