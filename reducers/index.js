import {GET_ALL_DECKS,ADD_NEW_CARD} from '../actions/index.js'

export default function decks(state={},action){
  switch(action.type){
    case GET_ALL_DECKS :
          return {
            ...state,
            decks: action.decks
          }
  
           default : return state;
  }
}
