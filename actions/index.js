import {getAllDecks} from '../utils/api';

export const GET_ALL_DECKS = 'GET_ALL_DECKS';


export const handleAllDecksData = () => dispatch => {
    getAllDecks().then(decks =>
        dispatch( {
            type: GET_ALL_DECKS,
            decks
        })
    )
}
