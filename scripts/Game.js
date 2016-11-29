//Game Constructor
function Game (){
    //STATE
    this.game_id = Game.id++;
    this.players = []; //will become array with all players
    this.deck_common_draw = [];
    this.deck_common_discard = [];
}
Game.id = 1;

//populate Players array
Game.prototype.MakePlayers = function(num){
    let tempArray = [];
    for(let i = 0; i < num; i++){
        tempArray[i] = new Player(); //get Player.js Constructor
    }
    this.players = tempArray;
};

Game.prototype.MakeDeck = function() {
    this.deck_draw = new Standard52(); //get Standard52 from Card.js
};

Game.prototype.ShuffleCards = function(deckToShuffle){
    //take all discards (if any), out them in shuffle array, return new deck_draw
    console.warn('Need to reshuffle');

};

Game.prototype.DrawCards_each = function(toWhom, amount, fromWhere){
    let cardsRemaining = fromWhere.length;
    let cardsNeeded = amount;
    let startDeck = fromWhere.slice(); //get current card array in the deck fromWhere
    const player = toWhom;

    let newHand = this.IncreaseHand(cardsNeeded, cardsRemaining, startDeck);
    player.player_hand = newHand; //need newHand var to pass into DecreaseDeck
    // let newDeal = this.DecreaseDeck(newHand, startDeck);
    // this.deck_draw = this.DecreaseDeck(newHand, startDeck);

    this.deck_draw = startDeck; //Super side effect
};

Game.prototype.IncreaseHand = function(needed, remaining, deck){
    let tempArray = [];
    //for each card that is needed...
    for(let i = 0; i < needed; i++){
        //and if the number needed is available...
        if(needed <= remaining){
            //grab the first card in the deck array, push it to temp. Attempt to separate draw IncreaseHand and DecreaseDeck
            // tempArray.push(deck[i]);

            //Super side effect to update deck. Fix this later
            tempArray.push(deck.splice(0,1)[0]); //splice a card out and side effect starting Deck one less card.
        } else {
            this.ShuffleCards(deck);
            //then keep drawing
            continue;
        }
    }
    return tempArray;
};

Game.prototype.DecreaseDeck = function(cards, deck){
};

Game.prototype.getFromDeck = function(from){
    const startDeck = fromWhere.slice(); //get current card array in the deck fromWhere
};

Game.prototype.DrawCards_all = function(){
//foreach player...
//adding cards to array will be splice both arrays. Merge/join (ADD), replace (FROM)

    game.players.map( player => {
        console.log(player);
    });

};
