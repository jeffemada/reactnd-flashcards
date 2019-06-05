import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { black, gray, white } from '../utils/colors';

class NewCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.newCard}>
          <View>
            <TextInput style={styles.input} placeholder="Question" />
          </View>
          <View>
            <TextInput style={styles.input} placeholder="Answer" />
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
    flex: 1,
    backgroundColor: white,
    padding: 15
  },
  newCard: {
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: white,
    flex: 1,
    padding: 20,
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: gray,
    fontSize: 20,
    padding: 6,
    marginTop: 5
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    padding: 20,
    marginTop: 30
  },
  button: {
    padding: 10,
    margin: 5,
    height: 45,
    width: 160,
    borderRadius: 2,
    justifyContent: 'center',
    backgroundColor: black
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    color: white
  }
});

export default NewCard;
