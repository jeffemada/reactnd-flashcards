import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { mockDecks } from '../utils/api';
import { lightGray } from '../utils/colors';
import Deck from './Deck';

class DeckList extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { dispatch } = this.props;

    mockDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ loading: false })));
  }

  render() {
    const { loading } = this.state;
    const { decks } = this.props;

    return loading ? (
      <AppLoading />
    ) : (
      <View style={styles.container}>
        {Object.keys(decks).map((id) => (
          <Deck key={id} deck={decks[id]} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    flex: 1,
    padding: 15
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckList);
