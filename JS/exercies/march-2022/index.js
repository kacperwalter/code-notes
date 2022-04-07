class BallMovement {
  constructor(el) {
    this.playground = el;
    this.ball = document.querySelector('[data-ball]');
    this.ballTopPosition = 70;
    this.ballLeftPosition = 0;

    this.addListeners();
    // console.log(this.ball.style.top);
    // this.ball.style.top = "50px";
    this.ball.style.top = `${this.ballTopPosition} px`;
  }

  ballMovement(event) {
    switch (event.code) {
      case "ArrowLeft":
        this.ballLeftPosition = this.ballLeftPosition - 10;
        this.ball.style.left = `${this.ballLeftPosition}px` ;
        break;
      case "ArrowRight":
        // Right pressed
        break;
      case "ArrowUp":
        // Up pressed
        break;
      case "ArrowDown":
        // Down pressed
        break;
    }
  }

  // changePosition(top = 0, left = 0) {
  //   if (top != 0) {
  //     this.ball.tyle.left = 
  //   }
  //   this.ball.style.left = `${left}`;
  //   this
  // }

  ballGrab() {

  }

  addListeners() {
    this.ball.addEventListener('mouseover', this.ballGrab);
    window.addEventListener('keydown', this.ballMovement);
  }
}

new BallMovement(document.querySelector('[data-playground]'));