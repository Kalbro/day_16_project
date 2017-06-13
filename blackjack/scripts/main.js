/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
// set face card value, set ace value, get total of hand.

// input: is an array of strings
// create a for loop.
function handValue (hand) {
  let fullHand = hand.reduce(function (a, b) { return a + b});

  let containsAce = hand.includes("A");

  var handTotal = 0;

for (var i = 0; i < hand.length; i++){

  let handCard = hand[i];
  if (handCard === "K" || handCard === "J" ||handCard === "Q" ) {
    handTotal = handTotal + 10;
  }else if (handCard === "A") {
    handTotal = handTotal + 11;
  }else {
    handTotal += parseInt(handCard);
  
  }
  if (handTotal > 21 && containsAce){
    handTotal -= 10;
  }
  }
  console.log(handTotal);
return handTotal;
}











// output is a number total of hand
//
// handValue(hand)

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
