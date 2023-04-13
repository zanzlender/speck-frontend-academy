import Player from "./player.js";

export default class Lottery {
  constructor(people) {
    this.people = people;
    this.players = [];
    this.winningCombination = [];
  }

  getLotteryNumbers() {
    let lotteryNumbers = [];

    while (lotteryNumbers.length < 4) {
      const number = Math.floor(Math.random() * 7) + 1;

      if (!lotteryNumbers.includes(number)) lotteryNumbers.push(number);
    }

    return lotteryNumbers;
  }

  generatePlayers() {
    this.players = this.people.map((person) => {
      return new Player(person.name, person.surname, this.getLotteryNumbers().sort());
    });
  }

  getWinningCombination() {
    this.winningCombination = this.getLotteryNumbers();
  }

  startDrawing() {
    this.generatePlayers();
    this.getWinningCombination();

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const winners = this.players.filter((player) => {
          return player.lotteryNumbers.every((number) => this.winningCombination.includes(number));
        });

        const result = {
          winningCombination: this.winningCombination,
          winners,
        };

        if (winners.length > 0) {
          resolve(result);
        } else {
          reject(result);
        }
      }, 2000);
    });
  }
}
