import URLs from '../../contants/urls';
import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_FAVORITE_QUOTES = 'GET_FAVORITE_QUOTES';
export const GET_VIEW_COUNTERS = 'GET_VIEW_COUNTERS';

export const getAllUsers = () => {
	return async (dispatch, getState) => {
		await axios.get(URLs.base.concat('/users'), {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(users => {
				return dispatch({
					type: GET_ALL_USERS,
					users: users.data,
				});
			})
			.catch(error => {
				console.log(error)
		});
	}
}

export const getFavoriteQuotes = (user_id) => {
	return async (dispatch, getState) => {
		await axios.get(URLs.base.concat(`/users/favorite_quotes?user_id=${user_id}`), {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(quotes => {
				return dispatch({
					type: GET_FAVORITE_QUOTES,
					favoriteQuotes: quotes.data.favorite_quotes,
				});
			})
			.catch(error => {
				console.log(error)
		});
	}
}

export const getViewCounters = (user_id) => {
	return async (dispatch, getState) => {
		await axios.get(URLs.base.concat(`/users/view_counters?user_id=${user_id}`), {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(viewCounters => {
				return dispatch({
					type: GET_VIEW_COUNTERS,
					viewCounters: viewCounters.data.view_counters,
				});
			})
			.catch(error => {
				console.log(error)
		});
	}
}
