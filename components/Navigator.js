import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { black, white } from '../utils/colors';
import DeckDetail from './DeckDetail';
import DeckList from './DeckList';
import NewDeck from './NewDeck';
import Quiz from './Quiz';

const TabsNavigator = createMaterialTopTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name="md-play" size={30} color={tintColor} />
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New deck',
        tabBarIcon: ({ tintColor }) => <Ionicons name="md-add" size={30} color={tintColor} />
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
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  }
});

export default createAppContainer(Navigator);
