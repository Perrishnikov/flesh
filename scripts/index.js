
let game = new Game();

//destructure some of these. Rename them too? { old: new}
game.MakePlayers(2);
game.players[0].SetName('Perry');
game.players[1].SetName('Bitt');
game.MakeDeck();
game.DrawCards_all(7);
// game.DrawCards_each.apply(game.players[0], [7]);

//game.DrawCards_each(to whom, number cards, from where);
// game.DrawCards_each(game.players[0], 7, game.deck_draw);
// game.DrawCards_each(game.players[1], 7, game.deck_draw);
console.table(game.players[0].player_hand);
// console.table(game.deck_draw);
