// let card01 = new Card();
// let card02 = new Card();
// let card03 = new Card();
// console.log('Card 1 random: ',card01.random_num);
// console.log('Card 2 random: ',card02.random_num);
// console.log('Card 3 random: ',card03.random_num);
// let player01 = new Player();
// let player02 = new Player();
// console.log('Player 01 ID: ', player01.player_id);
// console.log('Player 02 ID: ', player02.player_id);
let game = new Game();
game.MakePlayers(2);
game.players[0].SetName('Perry');
game.players[1].SetName('Bitt');
game.MakeDeck();

console.table(game.players);
console.table(game.deck_draw);
