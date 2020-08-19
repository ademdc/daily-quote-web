import * as actions from '../actions/user';

const innitialState = {
  user: null,
  users: null,
	favoriteQuotes: [],
	viewCounters: []
}

const userReducer = (state = innitialState, action) => {
	switch(action.type) {
    case actions.GET_ALL_USERS:
			return { ...state, users: action.users }
		case actions.GET_FAVORITE_QUOTES:
			return { ...state, favoriteQuotes: action.favoriteQuotes, user: action.user }
		case actions.GET_VIEW_COUNTERS:
			return { ...state, viewCounters: action.viewCounters, user: action.user }
		default:
			return state;
	}
}

export default userReducer;