import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text, View, Platform,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'

class DeckDetails extends Component {

  AddNewCard(deck){
      this.props.navigation.navigate("NewCard", {
       deckID: deck.deckID,
       title: deck.title,
       navigation: this.props.navigation
     });
  }

    render(){
      const {deck}= this.props;
      if(deck){
        return(
          <View style={{flex: 1}}>
            <Text>{deck.title}</Text>
            <TouchableOpacity
             onPress={() => this.AddNewCard(deck)}
             ><Text >Add Card</Text>
           </TouchableOpacity>
          </View>
        )
      }

    }

}
function mapStateToProps({decks},props){
  const {deckID} =props.navigation.state.params;
  return{
    deck: decks[deckID]
  };
}

export default connect(mapStateToProps)(DeckDetails);
