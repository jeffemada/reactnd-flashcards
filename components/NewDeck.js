import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { saveDeck } from '../utils/api';
import { gray, white } from '../utils/colors';
import Button from './Button';

class NewDeck extends Component {
  state = {
    title: '',
    questions: []
  };

  onChangeTitle = (title) => {
    this.setState(() => ({
      title
    }));
  };

  onSubmit = () => {
    const { dispatch, navigation } = this.props;
    const deck = this.state;

    saveDeck(deck)
      .then(() => dispatch(addDeck(deck)))
      .then(() => navigation.navigate('DeckDetail', { id: deck.title }))
      .then(() => this.setState({ title: '' }));
  };

  render() {
    const { title } = this.state;

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.newDeck}>
          <View>
            <Text style={styles.question}>What is the title of your new deck?</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              value={title}
              placeholder="Deck title"
              onChangeText={(title) => this.onChangeTitle(title)}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button text="Submit" onPress={this.onSubmit} disabled={!title || !title.trim()} />
          </View>
        </KeyboardAvoidingView>
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
  }
});

export default connect()(NewDeck);
