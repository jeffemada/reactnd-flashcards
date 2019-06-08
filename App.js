import { Constants } from 'expo';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Navigator from './components/Navigator';
import middleware from './middleware';
import reducers from './reducers';
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
          <Navigator />
        </View>
      </Provider>
    );
  }
}
