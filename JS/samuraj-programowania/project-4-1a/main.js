const h1 = document.querySelector('h1');

// crap code - łopatologiczna method
// document.body.addEventListener('mousemove', (event) => {
//   // console.log(event.clientX, event.clientY);
//   h1.textContent = `${event.clientX}, ${event.clientY}`;

//   document.body.style.backgroundColor = `rgb(${event.clientX/3}, ${event.clientY/2}, ${event.clientX/event.clientY * 20})`;
// })

// optimisied code
document.body.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  h1.textContent = `${x}, ${y}`;

  const red = x/width * 100;
  const green = y/height * 100;
  const blue = (x / width * 100) + (y/height * 100) / 2;

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})