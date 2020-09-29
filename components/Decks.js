// import React,{Component} from 'react';
// import { ScrollView, StyleSheet, Text, View, Platform,TouchableOpacity } from 'react-native';
//
//
// class Decks extends Component {
//
//     render(){
//       return(
//         <View style={{flex: 1}}>
//           <Text>Decks info</Text>
//         </View>
//       )
//     }
//
// }
//
// export default Decks;

// this is the homepage that contains the cards for all the decks
import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text, View, Platform,TouchableOpacity } from 'react-native';
import {getAllCards} from '../utils/helpers';
import {handleAllDecksData} from '../actions/index.js';
import {connect} from 'react-redux'
import DeckDetails from './DeckDetails';


class Decks extends Component {

  componentDidMount(){
    this.props.dispatch(handleAllDecksData())
  }

showDeckDetails(deck){
    this.props.navigation.navigate("DeckDetails", {
     deckID: deck.deckID,
     title: deck.title,
     navigation: this.props.navigation
   });
}
  render(){
      const {decks} = this.props;
      console.log(this.props);
    console.log(this.props.decks);
  //  console.log('props');
    //console.log(decks);
    return (

       <ScrollView contentContainerStyle={styles.container}>

       {decks && Object.keys(decks).map(id =>(
          <View style={styles.deck} key={decks[id].deckID}>
            <TouchableOpacity key={id} onPress={() => this.showDeckDetails(decks[id])}>
               <View key={decks[id].deckID}>
               <Text style={{fontSize:18,fontWeight:'bold'}}>{decks[id].title}</Text>
               <Text style={{paddingBottom:10,  alignItems: 'center'}}>{decks[id].questions.length} cards</Text>
               </View>
             </TouchableOpacity>
          </View>
           ))}
       </ScrollView>

    )

}
}


const styles = StyleSheet.create({
  container:{
    flex :1,
    padding:100,
    justifyContent: 'center',
    alignItems: 'center'

  },
  deck:{
    flex:1,
    marginLeft:20,
    marginRight:30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

//trying to get decks from state
function mapStateToProps({decks}){
  console.log(decks);
  return{
    decks
  };
}


export default connect(mapStateToProps)(Decks)
