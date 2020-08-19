import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import quoteReducer from './reducers/quote';
import authReducer from './reducers/auth';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
    quote: quoteReducer,
    auth: authReducer,
    user: userReducer
  })
  
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
