var cards = [
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

var cardsInPlay = [];

function checkMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
		} else {
		alert("Sorry, try again.");
		}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkMatch();
	}
}

function createBoard() {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', [i]);
		cardElement.addEventListener("click", flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function resetBoard() {
	while(cardsInPlay.length > 0) {
		cardsInPlay.pop();
	}
	createBoard();
}

createBoard();
	
var resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetBoard);

