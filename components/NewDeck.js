import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { black, gray, white } from '../utils/colors';

class NewDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.newDeck}>
          <View>
            <Text style={styles.question}>What is the title of your new deck?</Text>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="Deck title" />
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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
  newDeck: {
    alignItems: 'stretch',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    padding: 20
  },
  question: {
    fontSize: 26,
    textAlign: 'center'
  },
  input: {
    borderColor: gray,
    borderWidth: 1,
    fontSize: 20,
    marginTop: 5,
    padding: 6
  },
  buttonsContainer: {
    alignItems: 'center',
    backgroundColor: white,
    marginTop: 30,
    padding: 20
  },
  button: {
    backgroundColor: black,
    borderRadius: 2,
    margin: 5,
    height: 45,
    justifyContent: 'center',
    padding: 10,
    width: 160
  },
  buttonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
});

export default NewDeck;
