import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { black, white } from '../utils/colors';
import DeckDetail from './DeckDetail';
import DeckList from './DeckList';

const TabsNavigator = createMaterialTopTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        backgroundColor: black
      }
    }
  }
);

const Navigator = createStackNavigator({
  Home: {
    screen: TabsNavigator
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  }
});

export default createAppContainer(Navigator);
