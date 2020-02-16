//Declare array to store cards
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"

},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//Declare array to hold cards in play
const cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			console.log("You found a match!");
		}else{
			console.log("Sorry, try again");
		}
	}
}

function flipCard(cardId) {

	console.log("User flipped " + cards[cardId].rank);
	console.log("Image: " + cards[cardId].cardImage)
	//Add the card the user flipped over to cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();



}

flipCard(0);
flipCard(2);

