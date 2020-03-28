import * as actions from '../actions/auth';

const innitialState = {
	token: null,
	userId: null,
	user: null,
	pushToken: null
}

const authReducer = (state = innitialState, action) => {
	console.log(action.type)
	switch(action.type) {
		case actions.AUTHENTICATE:
			return { ...state, token: action.token, userId: action.userId, user: action.user }
		case actions.LOGOUT:
			return { innitialState }
		case actions.SET_PUSH_TOKEN:
			return { ...state, pushToken: action.pushToken }
		default:
			return state;
	}
}

export default authReducer;