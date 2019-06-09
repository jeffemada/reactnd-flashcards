import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { addCardToDeck } from '../utils/api';
import { gray, white } from '../utils/colors';
import Button from './Button';

class NewCard extends Component {
  state = {
    answer: '',
    question: ''
  };

  onChangeQuestion = (question) => {
    this.setState(() => ({
      question
    }));
  };

  onChangeAnswer = (answer) => {
    this.setState(() => ({
      answer
    }));
  };

  isOk = () => {
    const { answer, question } = this.state;
    return question && question.trim() && answer && answer.trim();
  };

  onSubmit = () => {
    const { deckId, dispatch, navigation } = this.props;
    const card = this.state;

    addCardToDeck(deckId, card)
      .then(() => dispatch(addCard(deckId, card)))
      .then(() => navigation.goBack())
      .then(() =>
        this.setState({
          answer: '',
          question: ''
        })
      );
  };

  render() {
    const { answer, question } = this.state;

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.newCard}>
          <View>
            <TextInput
              value={question}
              style={styles.input}
              placeholder="Question"
              onChangeText={(text) => this.onChangeQuestion(text)}
            />
          </View>
          <View>
            <TextInput
              value={answer}
              style={styles.input}
              placeholder="Answer"
              onChangeText={(text) => this.onChangeAnswer(text)}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button text="Submit" onPress={this.onSubmit} disabled={!this.isOk()} />
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
    marginTop: 15,
    padding: 20
  }
});

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deckId
  };
}

export default connect(mapStateToProps)(NewCard);
