import { StatusBar } from 'react-native';
import {purple, white,blue} from './utils/colors';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import Decks from './components/Decks';
import NewDeck from './components/NewDeck';
import {Feather, Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux'
import DeckDetails from './components/DeckDetails';
import NewCard from './components/NewCard';

function UdaciStatusBar ({backgroundColor, ...props}){
  return(

    <View style={{backgroundColor, height: Constants.statusBarHeight}} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

//create the navigations

export const Homepage = createAppContainer(createStackNavigator({
  MainPage: {
    screen: Tabs = createAppContainer(createBottomTabNavigator({
      Decks: {
        screen: Decks , navigationOptions: {
          tabBarLabel: 'Decks',
          tabBarIcon: () => <Ionicons name='ios-home' activeTintColor={purple} size={25} />
        }
      },
      NewDeck: {
        screen: NewDeck, navigationOptions: {
          tabBarLabel: 'New Deck',
          tabBarIcon: () => <Ionicons name='ios-add' size={25} Color={purple} />,
          inactiveBackgroundColor: purple,
        }
      },
    },
      {
        tabBarOptions: {
          activeTintColor: purple,
          inactiveTintColor: 'black',
          inactiveBackgroundColor: 'rgba(0, 0, 0, 0.1)',
          labelStyle: {
            fontSize: 18,
            paddingBottom:10,
          },
          style: {
            paddingBottom:10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 65,
            backgroundColor: white,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
              width: 3,
              height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1,
          }
        }
      })),
    navigationOptions: {
      headerShown:false
    }
  },
  NewDeck: {
    screen: NewDeck
  },
  DeckDetails:{
    screen: DeckDetails
  },
  NewCard :{
    screen: NewCard
  }

},{mode:'modal'}))

class App extends Component {

  render(){
    return (



      <View style={{ flex: 1 }}>
          <View>
            <UdaciStatusBar backgroundColor={blue} barStyle='light-content' />
          </View>
          <Homepage />
        </View>




    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default connect()(App);
