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

function populateCardArray () {
    let tempArray = [];
    let uniqueID = 0;

    for (let i = 0; i < cardSuits.length; i++) {
        for (let ii = 0; ii < cardValue.length; ii++) {
            uniqueID ++;
            tempArray.push(Object.assign( {}, {uid: uniqueID}, cardValue[ii], cardSuits[i]));
        }
    }
    return tempArray;
};
