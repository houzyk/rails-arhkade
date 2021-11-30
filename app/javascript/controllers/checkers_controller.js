import { Controller } from "stimulus";

const checkersGame = (game) => {
  let colour;
  let start = -1;
  const colourAssign = (index) => colour = (index % 2 === 0) ? "b" : "w";
  for (let index = 0; index < 64; index++) {
    if (index % 8 === 0) start += 1;
    (start % 2 === 0) ? colourAssign(index) : colourAssign(index - 1);
    game.insertAdjacentHTML('beforeend', `<div class="grid-checkers grid-checkers-${colour}"></div>`);
  }
}
export default class extends Controller {
  static targets = ["game"]

  connect() {
    console.log("Checkers!");
    checkersGame(this.gameTarget);
  }
}
