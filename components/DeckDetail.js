import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gray, black, white } from '../utils/colors';
import Deck from './Deck';
import { connect } from 'react-redux';

class DeckDetail extends Component {
  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Deck deck={deck} />
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

function mapStateToProps(state, { navigation }) {
  const { id } = navigation.state.params;

  return {
    deck: state[id]
  };
}

export default connect(mapStateToProps)(DeckDetail);
