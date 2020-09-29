
import {FLASHCARD_STORAGE_KEY} from './helpers.js'
import {AsyncStorage} from '@react-native-community/async-storage'



export function getAllDecks () {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(decks => Object.values(JSON.parse(decks)))
    .catch(error =>
      console.log(error))
    }
