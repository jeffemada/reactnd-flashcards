import React, { Component } from 'react';
import { addCardToDeck, getDeck, getDecks, saveDeck } from '../utils/api';
import { Text, View } from 'react-native';

class DeckList extends Component {
  render() {

    return (
      <View>
        <Text>DeckList component</Text>
      </View>
    );
  }
}

export default DeckList;
