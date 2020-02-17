let totalWins = 0;
let totalLoss = 0;
let totalMatches = 0;

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
	
	let totalScore = document.getElementsByTagName('th');
	console.log(totalScore);

	if(cardsInPlay[0] === cardsInPlay[1]){
		setTimeout(function(){ alert("You found a match!"); }, 500);
		totalWins += 1;
		totalMatches += 1;
		document.getElementById("scoreboard").rows[1].cells[0].innerHTML = totalWins;

		//alert("You found a match!");
	}else{
		setTimeout(function(){ alert("Sorry, try again"); }, 500);
		totalLoss += 1;
		totalMatches += 1;
		document.getElementById("scoreboard").rows[1].cells[1].innerHTML = totalLoss;
		//alert("Sorry, try again");
	}
	document.getElementById("scoreboard").rows[1].cells[2].innerHTML = totalMatches;
}

function flipCard() {
	let cardId = this.getAttribute('data-id');

	//Add the card the user flipped over to cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	//If user selected two cards check if they match
	if(cardsInPlay.length == 2){
		checkForMatch();
	}

	console.log("User flipped " + cards[cardId].rank);
	console.log("Image: " + cards[cardId].cardImage)

}

function createBoard(){
	for(let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		//cardElement.addEventListener("keydown", resetBoard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


//Add listner for reset button
document.getElementById('reset').addEventListener('click',resetBoard);

function resetBoard(){
	//reset board
    document.getElementById('game-board').innerHTML = " ";
    //remove two cards in cardsInPlay array
	cardsInPlay.pop();
	cardsInPlay.pop();

	createBoard();
}

createBoard();

