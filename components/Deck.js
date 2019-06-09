import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Animated, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { gray, white } from '../utils/colors';

class Deck extends Component {
  state = {
    bounceValue: new Animated.Value(1)
  };

  onPressDeck = () => {
    const { bounceValue } = this.state;
    const { onPress } = this.props;

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 })
    ]).start(() => {
      onPress();
    });
  };

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
    const { bounceValue } = this.state;

    return (
      <TouchableWithoutFeedback onPress={this.onPressDeck}>
        <Animated.View style={{ transform: [{ scale: bounceValue }] }}>{this.renderDeck(deck)}</Animated.View>
      </TouchableWithoutFeedback>
    );
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
