
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

var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		this.setAttribute('src', cards[cardId].cardImage);
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!")
		} else {
			alert("Sorry, try again.")
		}
	}
};

var flipCard = function () {

	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};

var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		document.cardElement.setAttribute('src', "images/back.png");
		document.cardElement.setAttribute('data-id', i);
		document.cardElement.addEventListener('click', flipcard);
		document.querySelector('game-board').appendChild(cardElement);
	}
};

createBoard();





