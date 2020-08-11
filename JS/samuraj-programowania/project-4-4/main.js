let red = 255;
let green = 255;
let blue = 255;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  if (e.keyCode === 38) {
    if ((red > 0) && (green > 0) && (blue > 0)) {
      red -= 10;
      green -= 10;
      blue -= 10;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
      red = 0;
      green = 0;
      blue = 0;
    }
  } else if (e.keyCode === 40) {
    if ((red >= 255) && (green >= 255) && (blue >= 255)) {
      red = 255;
      green = 255;
      blue = 255;
    } else {
      red += 10;
      green += 10;
      blue += 10;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
  }
}

window.addEventListener('keydown', changeColor);