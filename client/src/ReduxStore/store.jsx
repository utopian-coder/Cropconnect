
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import Redux Thunk
import { reducers } from './Reducers/index'

function saveToLocalStorage(store) {
  try {
    const serializedState = JSON.stringify(store);
    window.localStorage.setItem('store', serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = window.localStorage.getItem('store');
    if (serializedState === null) return undefined;
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: reducers,
  preloadedState: persistedState,
  middleware: [thunk], // Add Redux Thunk middleware
  devTools: true,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
