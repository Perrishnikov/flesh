//Card Constructor
function Card (){
    this.card_id = Card.id ++;
}
//gives every card a sequential ID
//might could make a set ID as well
Card.id = 1;

//parameters for a standard 52 card deck
function Standard52 (){
    const cardSet = {set: 'standard 52'};

    const cardSuits = [
        {suit: '\u2661', color: 'red'},
        {suit: '\u2662', color: 'red'},
        {suit: '\u2660', color: 'black'},
        {suit: '\u2663', color: 'black'}
    ];

    const cardValue = [
        {symbol: 'A', value: 1},
        {symbol: '2', value: 2},
        {symbol: '3', value: 3},
        {symbol: '4', value: 4},
        {symbol: '5', value: 5},
        {symbol: '6', value: 6},
        {symbol: '7', value: 7},
        {symbol: '8', value: 8},
        {symbol: '9', value: 9},
        {symbol: '10', value: 10},
        {symbol: 'J', value: 11},
        {symbol: 'Q', value: 12},
        {symbol: 'K', value: 13}
    ];

    let tempArray = [];
    for (let ii = 0; ii < cardSuits.length; ii++) {
        for (let iii = 0; iii < cardValue.length; iii++) {
            let tempCard = new Card();

            //merge all properties into a new Card (tempCard)
            tempArray.push(Object.assign( tempCard, cardSet, cardSuits[ii], cardValue[iii] ));
        }
    }
    return tempArray;
}
