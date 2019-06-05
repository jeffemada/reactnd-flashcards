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
            <Text style={{ fontSize: 20, color: gray }}>3 cards</Text>
          </View>
          <View style={styles.buttonsContainer}>
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
    flex: 1,
    backgroundColor: white,
    padding: 15
  },
  deck: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 2,
    flex: 1,
    padding: 20,
    marginTop: 10
  },
  buttonsContainer: {
    marginTop: 50
  },
  button: {
    backgroundColor: black,
    padding: 10,
    margin: 5,
    height: 45,
    width: 160,
    borderRadius: 2,
    justifyContent: 'center'
  },
  buttonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
});

export default DeckDetail;
