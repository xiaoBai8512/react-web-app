import { combineReducers, createStore } from 'redux'
import menu_reducer from './reducers/menu'

const store = createStore(
	combineReducers({
		// menu_reducer,
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => console.log(store.getState()))

export default store
