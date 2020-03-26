import URLs from '../../contants/urls';
import axios from 'axios';

export const GET_ALL_QUOTES = 'GET_ALL_QUOTES';
export const GET_QUOTE = 'GET_QUOTE';
export const EDIT_QUOTE = 'EDIT_QUOTE';
export const GET_RANDOM_QUOTE = 'GET_RANDOM_QUOTE';
export const GET_FAVORITE_QUOTES = 'GET_FAVORITE_QUOTES';
export const SET_FAVORITE_QUOTE = 'SET_FAVORITE_QUOTE';
export const CREATE_NEW_QUOTE = 'CREATE_NEW_QUOTE'
export const SET_DAILY_QUOTE = 'SET_DAILY_QUOTE'
export const DELETE_QUOTE = 'DELETE_QUOTE'

export const newQuote = (category, author, quoteText, imageUrl) => {
	return async (dispatch, getState) => {
		axios.post(URLs.base.concat('/quotes'), {
			quote: {
				text:  quoteText,
				author: author,
				category: category,
				image_url: imageUrl
			}
		}, {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(quote => {
				console.log(quote.data)
				return dispatch({
					type: CREATE_NEW_QUOTE,
					quote
				});
			})
			.catch(error => {
				console.log('quote error')
				console.log(error)
				return false;
		});
	}
}

export const updateQuote = (id, category, author, quoteText, imageUrl) => {
	return async (dispatch, getState) => {
		axios.patch(URLs.base.concat(`/quotes/${id}`), {
			id: id,
			quote: {
				text:  quoteText,
				author: author,
				category: category,
				image_url: imageUrl
			}
		}, {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(quote => {
				console.log(quote.data)
				
				return dispatch({
					type: EDIT_QUOTE
				});
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}

export const getAllQuotes = () => {
	return async (dispatch, getState) => {
		axios.get(URLs.base.concat('/quotes'), {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(quotes => {
				return dispatch({
					type: GET_ALL_QUOTES,
					allQuotes: quotes.data,
				});
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}

export const getFavoriteQuotes = () => {
	return (dispatch, getState) => {
		axios.get(URLs.base.concat('/quotes/favorites'), {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(quotes => {
				console.log(quotes.data)
				return dispatch({
					type: GET_FAVORITE_QUOTES,
					favoriteQuotes: quotes.data
				});
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}

export const getQuote = (id) => {
	return async (dispatch, getState) => {
		await axios.get(URLs.base.concat(`/quotes/${id}`), {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
		.then(quote => {				
			dispatch({
				type: GET_QUOTE,
				currentQuote: quote.data,
				quote
			});

			return quote.data;
		})
		.catch(error => {
			console.log(error)
			return false;
		});
	}
}

export const deleteQuote = (id) => {
	return async (dispatch, getState) => {
		console.log('delete quote action')
		await axios.delete(URLs.base.concat(`/quotes/${id}`), {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
		.then(response => {
			dispatch({type: DELETE_QUOTE})
		})
		.catch(error => {
			console.log(error)
		})
	}
}

export const getDailyQuote = () => {
	return dispatch => {
		axios.get(URLs.base.concat('/quotes/daily'))
			.then(quote => {
				return dispatch({
					type: GET_RANDOM_QUOTE,
					quote: quote.data
				});
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}

export const setFavoriteQuote = (quote) => {
	return (dispatch, getState) => {
		axios.post(URLs.base.concat('/quotes/set_favorite'), {
			user_id:  getState().auth.userId,
			quote_id: quote.id
		}, {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(quotes => {
				return dispatch({
					type: SET_FAVORITE_QUOTE,
					favoriteQuote: quotes.data.favorite_quote
				});
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}

export const setNewDailyQuote = (id, days_from_now) => {
	return (dispatch, getState) => {
		axios.post(URLs.base.concat(`/quotes/${id}/set_daily/`), {
			user_id:  getState().auth.userId,
			days_from_now: days_from_now
		}, {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(quote => {
				console.log(quote.data)
				
				return dispatch({
					type: SET_DAILY_QUOTE,
					quote: quote.data.quote
				});
			})
			.catch(error => {
				console.log(error)
		});
	}
}
