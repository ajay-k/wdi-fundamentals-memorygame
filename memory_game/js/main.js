//Declare array to store cards
const cards = ["queen", "queen", "king", "king"];

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

	console.log("User flipped " + cards[cardId]);

	//Add the card the user flipped over to cardsInPlay array
	cardsInPlay.push(cards[cardId]);
	checkForMatch();

}

flipCard(0);
flipCard(2);

