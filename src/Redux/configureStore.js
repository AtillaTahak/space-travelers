import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/mission';

const reducer = combineReducers({
  missions: missionReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
