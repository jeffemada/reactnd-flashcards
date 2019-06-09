import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { gray, white } from '../utils/colors';
import Button from './Button';
import Deck from './Deck';

class DeckDetail extends Component {
  onPressQuiz = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('Quiz', { deckId: deck.title });
  };

  onPressAddCard = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('NewCard', { deckId: deck.title });
  };

  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Deck deck={deck} />
          <Button text="Add card" style={{ backgroundColor: gray }} onPress={this.onPressAddCard} />
          <Button text="Start quiz" onPress={this.onPressQuiz} disabled={deck.questions.length === 0} />
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
  }
});

function mapStateToProps(state, { navigation }) {
  const { id } = navigation.state.params;

  return {
    deck: state[id]
  };
}

export default connect(mapStateToProps)(DeckDetail);
