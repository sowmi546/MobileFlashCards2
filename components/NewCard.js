import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text,TextInput, View, Platform,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {addNewCard} from '../actions'

class NewCard extends Component {
  state ={
    card:{
      question:'',
      answer:''
    }

  //  optionTwoValue:'',
  //  toHome:false
  };
  handleQuestion =(text) =>{
    let card = {...this.state.card}
    card.question=text
    this.setState(() =>({card}))
  }

  handleAnswer =(text) =>{

    let card = {...this.state.card}
    card.answer=text
    this.setState(() =>({card}))
  }
handleSubmit =(e) =>{
  const card = {...this.state.card}
   console.log('from submit');
   console.log(card);
  const deckID = this.props.navigation.state.params.deckID
  console.log(deckID);
  const {dispatch} = this.props;
  dispatch(addNewCard(deckID,card))
}

    render(){
      const {question,answer} = this.state;
      const {deck}= this.props;
      if(deck){
        return(
          <View style={{flex: 1}}>
            <Text>Adding new card to deck with name {deck.title}</Text>
            <Text>Question</Text>
            <TextInput style={{height:30, borderColor:'gray', borderWidth:1}} onChangeText={(e) => this.handleQuestion(e,question)} value={question} />
            <Text>Answer</Text>
            <TextInput style={{height:30, borderColor:'gray', borderWidth:1}} onChangeText={(e) => this.handleAnswer(e,answer)} value={answer} />
            <TouchableOpacity onPress={this.handleSubmit}><Text >Add Card</Text>
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

export default connect(mapStateToProps)(NewCard);
