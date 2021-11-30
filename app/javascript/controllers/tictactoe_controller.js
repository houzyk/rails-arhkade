import { Controller } from "stimulus";

const tictactoeGame = () => {
  const grids = document.querySelectorAll('.grid-tictactoe');

  // Initializes game
  let oGameStatus = true;
  grids.forEach(grid => grid.dataset.game = "none");

  const gameCount = (symbol) => {
    if (grids[4].dataset.game === symbol) {
      if (grids[3].dataset.game === symbol && grids[5].dataset.game === symbol) {
        return symbol;
      } else if (grids[1].dataset.game === symbol && grids[7].dataset.game === symbol) {
        return symbol;
      } else if (grids[0].dataset.game === symbol && grids[8].dataset.game === symbol) {
        return symbol;
      } else if (grids[6].dataset.game === symbol && grids[2].dataset.game === symbol) {
        return symbol;
      }
    } else if (grids[0].dataset.game === symbol) {
      if (grids[1].dataset.game === symbol && grids[2].dataset.game === symbol) {
        return symbol;
      } else if (grids[3].dataset.game === symbol && grids[6].dataset.game === symbol) {
        return symbol;
      }
    } else if (grids[8].dataset.game === symbol) {
      if (grids[6].dataset.game === symbol && grids[7].dataset.game === symbol) {
        return symbol;
      } else if (grids[2].dataset.game === symbol && grids[8].dataset.game === symbol) {
        return symbol;
      }
    }
  }

  const gamePlay = (event) => {
    if (event.currentTarget.dataset.game === "none") {
      if (oGameStatus) {
        event.currentTarget.dataset.game = "o-tictactoe";
        event.currentTarget.classList.add('o-tictactoe');
        oGameStatus = false;
      } else {
        event.currentTarget.dataset.game = "x-tictactoe";
        event.currentTarget.classList.add('x-tictactoe');
        oGameStatus = true;
      }
    }
  }

  grids.forEach(grid => grid.addEventListener('click', (event) => {
    gamePlay(event);
    if (gameCount("x-tictactoe") === "x-tictactoe") {
      setTimeout(() => {
        alert("Red Wins!");
        window.location.reload();
      }, 300);
      } else if (gameCount("o-tictactoe") === "o-tictactoe") {
        setTimeout(() => {
        alert("Blue Wins!");
        window.location.reload();
      }, 300);
      } else {
        const drawCondition = Array.from(grids).every( grid => grid.dataset.game === "x-tictactoe" || grid.dataset.game === "o-tictactoe");
        if (drawCondition) {
          setTimeout(() => {
            alert("It's a Draw!");
            window.location.reload();
          }, 300);
        };
      }
  }));
}
export default class extends Controller {

  connect() {
    console.log("O.X!");
    tictactoeGame();
  }
}
