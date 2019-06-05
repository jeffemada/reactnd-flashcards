import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Deck from './Deck';
import { gray } from '../utils/colors';

class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck />
        <Deck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    padding: 15
  }
});

export default DeckList;
