import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gray, white } from '../utils/colors';

class Deck extends Component {
  renderDeck = (deck) => {
    return (
      <View style={styles.deck}>
        <View>
          <Text style={{ fontSize: 26 }}>{deck.title}</Text>
        </View>
        <View>
          <Text style={styles.numCardsText}>{`${deck.questions.length} card${
            deck.questions.length > 1 ? 's' : ''
          }`}</Text>
        </View>
      </View>
    );
  };

  renderPressableDeck = (deck, onPress) => {
    return <TouchableOpacity onPress={onPress}>{this.renderDeck(deck)}</TouchableOpacity>;
  };

  render() {
    const { deck, onPress } = this.props;

    return onPress ? this.renderPressableDeck(deck, onPress) : this.renderDeck(deck);
  }
}

const styles = StyleSheet.create({
  deck: {
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 2,
    padding: 20,
    marginTop: 10
  },
  numCardsText: {
    color: gray,
    fontSize: 20
  }
});

Deck.propTypes = {
  deck: PropTypes.object.isRequired
};

export default Deck;
