import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'Flashcards:decks';

export async function getDecks() {
  return await AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => {
    return decks === null ? null : JSON.parse(decks);
  });
}

export async function getDeck(id) {
  return await AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => {
    return decks === null ? null : JSON.parse(decks)[id];
  });
}

export async function saveDeck(id, title) {
  return await AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [id]: {
        title,
        questions: []
      }
    })
  );
}

export async function addCardToDeck(deckId, card) {
  return await AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => {
    const deck = JSON.parse(decks)[deckId];
    deck.questions.push(card);
    AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [deckId]: deck
      })
    );
  });
}
