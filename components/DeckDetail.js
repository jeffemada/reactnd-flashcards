import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gray, black, white } from '../utils/colors';

class DeckDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <View>
            <Text style={{ fontSize: 36 }}>Deck1</Text>
          </View>
          <View>
            <Text style={styles.numCardsText}>3 cards</Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add card</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    padding: 15
  },
  deck: {
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 2,
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    padding: 20
  },
  numCardsText: {
    color: gray,
    fontSize: 20
  },
  button: {
    backgroundColor: black,
    borderRadius: 2,
    height: 45,
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    width: 160
  },
  buttonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
});

export default DeckDetail;
