import React from 'react';
import { View } from 'react-native';
import DeckList from './components/DeckList';
import DeckDetail from './components/DeckDetail';
import Quiz from './components/Quiz';
import NewDeck from './components/NewDeck';
import NewCard from './components/NewCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DeckList />
      </View>
    );
  }
}
