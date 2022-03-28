class BallMovement {
  constructor(el) {
    this.playground = el;
    this.ball = document.querySelector('[data-ball]');
  }
}

new BallMovement(document.querySelector('[data-playground'));