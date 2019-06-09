import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';
import { createNotification } from './helpers';

const DECKS_STORAGE_KEY = 'Flashcards:decks';
const NOTIFICATION_KEY = 'Flashcards:notifications';

export function clearLocalData() {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY);
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => {
    return decks === null ? null : JSON.parse(decks);
  });
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => {
    return decks === null ? null : JSON.parse(decks)[id];
  });
}

export function saveDeck(deck) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deck.title]: deck
    })
  );
}

export function addCardToDeck(deckId, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => {
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

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync);
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(13, 35, 0, 0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day'
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
