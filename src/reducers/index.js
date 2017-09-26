import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const busReducer = (state = {}, action) => {
  if(action.type == 'UPDATE_BUS') {
    const newState = {...state, bus : []};
    newState.buses = action.buses;
    return newState;
  }
  return state;
}

const searchReducer = (state = {}, action) => {
  if(action.type == 'SEARCH') {
    const newState = {...state, search : ""};
    newState.search = action.text
    return newState;
  }
  return state;
}

const errorReducer = (state = {}, action) => {
  if(action.type == 'REPORT_ERROR') {
    const newState = {...state, err: ""};
    newState.err = action.err;
    return newState;
  }
  return state;
}

const loadingReducer = (state = {}, action) => {
  if(action.type == 'LOAD_IN_PROGRESS') {
    const newState = {...state, isLoading : false};
    newState.isLoading = action.isLoading;
    return newState;
  }

  return state;
}

const reducers = combineReducers({
  busReducer : busReducer,
  searchReducer: searchReducer,
  errorReducer: errorReducer,
  loadingReducer: loadingReducer
})

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
)
