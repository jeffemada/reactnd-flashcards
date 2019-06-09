import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';
import { lightGray } from '../utils/colors';
import Deck from './Deck';

class DeckList extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks()
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

  renderEmpty = () => {
    return (
      <View style={styles.empty}>
        <View>
          <Text style={{ fontSize: 20 }}>👋 Start creating NEW DECKS!</Text>
        </View>
      </View>
    );
  };

  render() {
    const { loading } = this.state;
    const { decks } = this.props;

    return loading ? (
      <AppLoading />
    ) : decks.length > 0 ? (
      <View style={styles.container}>
        <FlatList data={decks} renderItem={this.renderDeck} keyExtractor={(item) => item.title} />
      </View>
    ) : (
      this.renderEmpty()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    flex: 1,
    padding: 15
  },
  empty: {
    alignItems: 'center',
    borderRadius: 2,
    padding: 20,
    marginTop: 10
  }
});

function mapStateToProps(decks) {
  return {
    decks: Object.values(decks)
  };
}

export default connect(mapStateToProps)(DeckList);
