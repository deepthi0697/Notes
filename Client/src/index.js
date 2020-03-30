import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import App from './App'
import 'materialize-css/dist/css/materialize.min.css'

import { startGetNotes } from './actions/notes'
import { startGetCategories} from './actions/categories'

const store = configureStore()

store.dispatch(startGetNotes())
store.dispatch(startGetCategories())

// store.subscribe(() => {
//     console.log(store.getState())
// })

const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)
ReactDom.render(jsx, document.getElementById('root'))