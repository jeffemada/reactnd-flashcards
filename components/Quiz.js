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
          <View style={{ marginTop: 30 }}>
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
    backgroundColor: white,
    flex: 1,
    padding: 15
  },
  card: {
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 2,
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    padding: 20
  },
  question: {
    fontSize: 26,
    textAlign: 'center'
  },
  cardTurn: {
    color: red,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 2,
    height: 45,
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    width: 160
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center'
  }
});

export default Quiz;
