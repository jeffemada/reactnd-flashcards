import React from 'react';
import { StatusBar, View } from 'react-native';
import DeckList from './components/DeckList';
import DeckDetail from './components/DeckDetail';
import Quiz from './components/Quiz';
import NewDeck from './components/NewDeck';
import NewCard from './components/NewCard';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import middleware from './middleware';
import { Constants } from 'expo';
import { black } from './utils/colors';

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    //TODO implementar notificações
  }
  render() {
    return (
      <Provider store={createStore(reducers, middleware)}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={black} barStyle="light-content" />
          <DeckList />
        </View>
      </Provider>
    );
  }
}
