import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { green, red, white } from '../utils/colors';

class Quiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>2/2</Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.question}>Does React Native work with Android?</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={[styles.buttonText, styles.cardTurn]}>Answer</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <View>
              <TouchableOpacity style={[styles.button, { backgroundColor: red }]}>
                <Text style={[styles.buttonText, { color: white }]}>Correct</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={[styles.button, { backgroundColor: green }]}>
                <Text style={[styles.buttonText, { color: white }]}>Incorrect</Text>
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
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 2,
    flex: 1,
    padding: 20,
    marginTop: 10
  },
  question: {
    fontSize: 26,
    textAlign: 'center'
  },
  cardTurn: {
    color: red,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    marginTop: 30
  },
  button: {
    padding: 10,
    margin: 5,
    height: 45,
    width: 160,
    borderRadius: 2,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center'
  }
});

export default Quiz;
