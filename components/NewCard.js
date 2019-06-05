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
    backgroundColor: white,
    flex: 1,
    padding: 15
  },
  newCard: {
    alignItems: 'stretch',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    padding: 20
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
    justifyContent: 'center',
    marginTop: 30,
    padding: 20
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

export default NewCard;
