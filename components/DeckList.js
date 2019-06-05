import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { lightGray } from '../utils/colors';
import Deck from './Deck';

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
    backgroundColor: lightGray,
    flex: 1,
    padding: 15
  }
});

export default DeckList;
