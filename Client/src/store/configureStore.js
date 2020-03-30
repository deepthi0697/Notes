import {createStore, combineReducers, applyMiddleware} from 'redux'
import notesReducer from '../reducers/notes'
import categoriesReducer from '../reducers/categories'
import thunk from 'redux-thunk'


const configureStore = () => {
    const store = createStore(
        combineReducers({
        
            notes: notesReducer,
            categories: categoriesReducer

    }), applyMiddleware(thunk))
    return store
}

export default configureStore