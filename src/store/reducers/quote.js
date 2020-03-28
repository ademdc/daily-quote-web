import * as quoteActions from '../actions/quote';

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
			case quoteActions.GET_QUOTE: 
				return { ...state, currentQuote: action.currentQuote }
      case quoteActions.GET_ALL_QUOTES:
				return { ...state, allQuotes: action.allQuotes }
			case quoteActions.GET_RANDOM_QUOTE:
				return { ...state, quote: action.quote }
			case quoteActions.GET_FAVORITE_QUOTES:
				return { ...state, favoriteQuotes: action.favoriteQuotes }
			case quoteActions.SET_FAVORITE_QUOTE:
				return { ...state, favoriteQuotes: [...state.favoriteQuotes, action.favoriteQuote] }
			case quoteActions.SET_DAILY_QUOTE: 
				return { ...state, quote: action.quote}
			case quoteActions.SET_LOADING:
				return { ...state, isLoading: action.isLoading}
			case quoteActions.CREATE_NEW_QUOTE:
				return state;
			case quoteActions.EDIT_QUOTE:
					return state;
			default:
				return state;
    }
}

export default quoteReducer;