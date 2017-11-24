var card;
var deck;
var DONE = 4;
var OK = 200;
var player_count = 2;

function newDeck() {
	if (localStorage.getItem("newDeck") === null) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
		xhr.send(null);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === DONE) {
				if (xhr.status === OK) {
					localStorage.setItem("newDeck", xhr.responseText);
					return JSON.parse(xhr.responseText);
				} else {
					return null;
				}
			} else {
				return null;
			}
		}
	} else {
		return JSON.parse(localStorage.getItem("newDeck"));
	}
}

function shuffle() {
	var shufflexhr = new XMLHttpRequest();
	var deck = localStorage.getItem("newDeck");
	deck = JSON.parse(deck);
	shufflexhr.open('GET', `https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`);
	shufflexhr.send(null);
	shufflexhr.onreadystatechange = function() {
		if (shufflexhr.readyState === DONE) {
			if (shufflexhr.status === OK) {
				console.log(JSON.parse(shufflexhr.responseText));
			}
		}
	}
}