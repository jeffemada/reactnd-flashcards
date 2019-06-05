import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { white, gray } from '../utils/colors';

class Deck extends Component {
  render() {
    return (
      <View style={styles.deck}>
        <View>
          <Text style={{ fontSize: 26 }}>Deck1</Text>
        </View>
        <View>
          <Text style={styles.numCardsText}>3 cards</Text>
        </View>
      </View>
    );
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

export default Deck;
