import URLs from '../../contants/urls';
import axios from 'axios';

export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const SET_PUSH_TOKEN = 'SET_PUSH_TOKEN'
export const AUTHENTICATE = 'AUTHENTICATE'

export const authenticate = (userId, token) => {
	console.log('IN AUTHENTICATE ACTION')
	console.log(userId)
	console.log(token)
  return { type: AUTHENTICATE, userId: userId, token: token };
};

export const login = (email, password) => {
	return async dispatch => {
		let response = await axios.post(URLs.base.concat('/login'), { users: { email: email, password: password }});

		if(response.status != 200) {
			console.log("IN FAIL LOGIN")
			throw new Error('Something went wrong')
		}
		console.log("IN SUCCESS LOGIN")

		dispatch(authenticate(response.data.userId, response.data.jwt));
		saveDataToStorage(response.data.jwt, response.data.userId);
	}
}

export const signUp = (email, password) => {
	return async dispatch => {
		let response = await axios.post(URLs.base.concat('/signup'), { users: { email: email, password: password }});

		if(response.status != 200) {
			console.log("IN FAIL SIGNUP")
			throw new Error('Something went wrong')
		}
		console.log("IN SUCCESS SIGUNP")

		dispatch(authenticate(response.data.userId, response.data.jwt))
		saveDataToStorage(response.data.jwt, response.data.userId);
	}
}

export const setPushToken = (token) => {
	return (dispatch, getState) => {
		axios.post(URLs.base.concat('/users/set_push_token'), 
			{ push_token: token }, {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(user => {
				return dispatch({ type: SET_PUSH_TOKEN, pushToken: user.data.push_token });
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}

export const logout = () => {
	return dispatch => {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');

		return dispatch({ type: LOGOUT });
	}
	
}
const saveDataToStorage = (token, userId) => {
	localStorage.setItem('token', token);
	localStorage.setItem('userId', userId);
};

export const checkAutoLogin = () =>{
	return dispatch => {
		const token = localStorage.getItem('token');
		if(!token){
				dispatch(logout());
		}else{
			const userId = localStorage.getItem('userId');
			dispatch(authenticate(userId, token));				
		}
	}
}