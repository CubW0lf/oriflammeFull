const game = {
  players: [
    {
      id: 1,
      pseudo: "CubWolf",
      points: 10,
      family: 1,
      currentTurn: true,
      hand: [2, 4, 6, 3, 1, 9, 7],
    },
    {
      id: 2,
      pseudo: "FRAMB0IIZY",
      points: 10,
      family: 2,
      currentTurn: false,
      hand: [8, 9, 10, 2, 3, 1, 7],
    },
    {
      id: 3,
      pseudo: "Jean-Loup",
      points: 10,
      family: 5,
      currentTurn: false,
      hand: [],
    },
  ],
  currentPlayer: 1,
  turn: 1,
  phase: "",
  board: [
    {
      id: 1,
      carte: 2,
      player: "CubWolf",
      state: 1,
    },
    {
      id: 2,
      carte: 4,
      player: "FRAMB0IIZY",
      state: 0,
    },
    {
      id: 3,
      carte: 9,
      player: "Jean-Loup",
      state: 1,
    },
  ],
};

export default game;
