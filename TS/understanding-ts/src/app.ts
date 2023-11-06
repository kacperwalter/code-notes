let userInput: unknown

const button = document.querySelector('button')

// if (button) {
//   button.addEventListener('click', () => {
//     console.log('Clicked!')
//   })
// }

// more modern way to do it
button?.addEventListener('click', () => {
  console.log('Clicked!')
})
