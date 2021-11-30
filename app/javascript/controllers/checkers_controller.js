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
  const grids = document.querySelectorAll('.grid-checkers');
  const pawnAssign = (grid, player) => {
    grid.innerHTML = `<div class="pawn-checkers pawn-checkers-${player}"></div>`;
    grid.dataset.status = true;
    grid.dataset.pawn = player;
  }
  grids.forEach((grid, gridPosition) => {
    if (grid.classList.contains('grid-checkers-b')) {
      if (gridPosition < 24 ) pawnAssign(grid, 1);
      if (gridPosition >= 40) pawnAssign(grid, 2);
    }
  });
}
export default class extends Controller {
  static targets = ["game"]

  connect() {
    console.log("Checkers!");
    checkersGame(this.gameTarget);
  }
}
