
let game = new Game();
game.MakePlayers(2);
game.players[0].SetName('Perry');
game.players[1].SetName('Bitt');
game.MakeDeck();
game.DrawCardsSinglePlayer.apply(game.players[0], [7]);
// game.players[0].DrawCards(7);

//console.table(game.players);
//console.table(game.deck_draw);
console.log(game);
