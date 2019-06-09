import { MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { black, gray, green, red, white } from '../utils/colors';
import Button from './Button';

class Quiz extends Component {
  state = {
    currentQuestion: 1,
    isResponding: false,
    numCorrectAnswers: 0,
    showScore: false
  };

  isLastQuestion = () => {
    const { currentQuestion } = this.state;
    const { totalQuestions } = this.props;
    return currentQuestion === totalQuestions;
  };

  getScore = () => {
    const { numCorrectAnswers } = this.state;
    const { totalQuestions } = this.props;
    return Math.round((numCorrectAnswers / totalQuestions) * 100);
  };

  onPressAnswer = () => {
    this.setState(() => ({
      isResponding: true
    }));
  };

  onPressCorrect = () => {
    if (this.isLastQuestion()) {
      this.setState((state) => ({
        numCorrectAnswers: state.numCorrectAnswers + 1,
        showScore: true
      }));
    } else {
      this.setState((state) => ({
        currentQuestion: state.currentQuestion + 1,
        isResponding: false,
        numCorrectAnswers: state.numCorrectAnswers + 1
      }));
    }
  };

  onPressIncorrect = () => {
    if (this.isLastQuestion()) {
      this.setState((state) => ({
        showScore: true
      }));
    } else {
      this.setState((state) => ({
        currentQuestion: state.currentQuestion + 1,
        isResponding: false
      }));
    }
  };

  onPressRestartQuiz = () => {
    this.setState((state) => ({
      currentQuestion: 1,
      isResponding: false,
      numCorrectAnswers: 0,
      showScore: false
    }));
  };

  onPressBackDeck = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  renderScore = () => {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <MaterialIcons name={this.getScore() >= 70 ? 'mood' : 'mood-bad'} size={40} color={black} />
          <Text style={styles.text}>
            {this.getScore() >= 70 ? 'Congratulations!' : 'Try again!'} You answered {this.getScore()}% correctly!
          </Text>
          <View style={{ marginTop: 15 }}>
            <Button text="Restart Quiz" style={{ backgroundColor: gray }} onPress={() => this.onPressRestartQuiz()} />
            <Button text="Back to Deck" onPress={() => this.onPressBackDeck()} />
          </View>
        </View>
      </View>
    );
  };

  renderQuestion = () => {
    const { currentQuestion, isResponding } = this.state;
    const { questions, totalQuestions } = this.props;
    const index = currentQuestion - 1;
    const { answer, question } = questions[index];

    return (
      <View style={styles.container}>
        <View>
          <Text>
            {currentQuestion}/{totalQuestions}
          </Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.text}>{isResponding ? answer : question}</Text>
          </View>
          {isResponding ? (
            <View style={{ marginTop: 15 }}>
              <Button text="Correct" style={{ backgroundColor: green }} onPress={() => this.onPressCorrect()} />
              <Button text="Incorrect" style={{ backgroundColor: red }} onPress={() => this.onPressIncorrect()} />
            </View>
          ) : (
            <TouchableOpacity onPress={() => this.onPressAnswer()}>
              <Text style={[styles.buttonText, styles.cardTurn]}>Answer</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  render() {
    const { showScore } = this.state;
    return showScore ? this.renderScore() : this.renderQuestion();
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
  text: {
    fontSize: 26,
    textAlign: 'center'
  },
  cardTurn: {
    color: red,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;
  const questions = state[deckId].questions;

  return {
    questions,
    totalQuestions: questions.length
  };
}

export default connect(mapStateToProps)(Quiz);
