import Lottery from "./modules/lottery.js";
import { politicians, folk } from "./data/data.js";

const buttonStartLottery = document.querySelector(".button-start-lottery");
const lotteryResultsContainer = document.querySelector(".lottery-results");
const winningCombinationParagraph = document.querySelector(".winning-combination");
const winningMessageParagraph = document.querySelector(".winners-message");
const winnersListEl = document.querySelector(".winners");

buttonStartLottery.addEventListener("click", () => {
  buttonStartLottery.disabled = true;
  buttonStartLottery.innerHTML = "Lottery drawing in progress...";
  lotteryResultsContainer.style.display = "none";

  const lottery = new Lottery(politicians);

  lottery
    .startDrawing()
    .then((result) => {
      winnersListEl.display = "block";
      winningCombinationParagraph.innerHTML = `Winning combination was: ${result.winningCombination}`;
      winningMessageParagraph.innerHTML = "Winners:";

      let winnersList = "";
      result.winners.forEach((player) => (winnersList += `<li>${player.getPlayerDetails()}</li>`));
      winnersListEl.innerHTML = winnersList;
    })
    .catch((result) => {
      winnersListEl.display = "none";
      winningCombinationParagraph.innerHTML = `Winning combination was: ${result.winningCombination}`;
      winningMessageParagraph.innerHTML = "There are no winners!";
    })
    .finally(() => {
      buttonStartLottery.innerHTML = "Start lottery drawing";
      buttonStartLottery.disabled = false;
      lotteryResultsContainer.style.display = "block";
    });
});
