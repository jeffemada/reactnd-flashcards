import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
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

  onPressDeck = (deck) => {
    const { navigation } = this.props;
    navigation.navigate('DeckDetail', { id: deck.title });
  };

  renderDeck = ({ item }) => {
    return <Deck deck={item} onPress={() => this.onPressDeck(item)} />;
  };

  render() {
    const { loading } = this.state;
    const { decks } = this.props;

    return loading ? (
      <AppLoading />
    ) : (
      <View style={styles.container}>
        <FlatList data={decks} renderItem={this.renderDeck} keyExtractor={(item) => item.title} />
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
    decks: Object.values(decks)
  };
}

export default connect(mapStateToProps)(DeckList);
