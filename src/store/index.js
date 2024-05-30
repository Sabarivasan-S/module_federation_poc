import { combineReducers, createStore } from 'redux';
import staticReducers from './reducers';
const store = createStore(staticReducers);
function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}
store.asyncReducers = {};

store.injectReducer = (key, asyncReducer) => {
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};
export default store;
