const team = {
  _players: [{ firstName: "Pablo", lastName: "Sanchez", age: 25 }],
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  _games: [{ opponent: "Broncos", teamPoints: 42, opponentPoints: 27 }],
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: oppPts,
      opponentPoints: oppPts,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team._players);
console.log("------------------------------------------------------");
team.addGame("Meow", 199, 299),
  team.addGame("Merry", 99, 999),
  team.addGame("MeowMerry", 19, 99),
  console.log(team._games);
