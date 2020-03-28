import { GET_QUOTE, GET_ALL_QUOTES, EDIT_QUOTE, SET_DAILY_QUOTE, SET_LOADING, GET_RANDOM_QUOTE, GET_FAVORITE_QUOTES, SET_FAVORITE_QUOTE, CREATE_NEW_QUOTE } from '../actions/quote';

const innitialState = {
	quote: null,
	favoriteQuotes: [],
	quotes: [],
	allQuotes: [],
	currentQuote: null,
	isLoading: false
}

const quoteReducer = (state = innitialState, action) => {
    switch(action.type) {
			case GET_QUOTE: 
				return { ...state, currentQuote: action.currentQuote }
      case GET_ALL_QUOTES:
				return { ...state, allQuotes: action.allQuotes }
			case GET_RANDOM_QUOTE:
				return { ...state, quote: action.quote }
			case GET_FAVORITE_QUOTES:
				return { ...state, favoriteQuotes: action.favoriteQuotes }
			case SET_FAVORITE_QUOTE:
				return { ...state, favoriteQuotes: [...state.favoriteQuotes, action.favoriteQuote] }
			case SET_DAILY_QUOTE: 
				return { ...state, quote: action.quote}
			case SET_LOADING:
				return { ...state, isLoading: action.isLoading}
			case CREATE_NEW_QUOTE:
				return state;
			case EDIT_QUOTE:
					return state;
			default:
				return state;
    }
  return state;
}

export default quoteReducer;