"use strict";

//GLOBAL CONSTANTS

/**get single card */

//make a deck
async function getDeck() {
  const deck = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  return deck.data;
}

async function getCard() {
  const deck = await getDeck();

  const card = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
  );
  console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)

}

async function getCards() {
  const deck = await getDeck();

  const card1 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
  );
  const card2 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
  );

  console.log(`${card1.data.cards[0].value} of ${card1.data.cards[0].suit}`)
  console.log(`${card2.data.cards[0].value} of ${card2.data.cards[0].suit}`)

}

//draw and log a card
//take a valid deck id
