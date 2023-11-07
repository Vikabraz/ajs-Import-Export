import defCharacter from "./domain.js";

class Game {
  start() {
    console.log("game started");
  }
}
const gameDef = new Game();
export default gameDef;

export class GameSavingData {}

export const loadGame = function readGameSaving() {};

export const saveGame = function writeGameSaving() {};
