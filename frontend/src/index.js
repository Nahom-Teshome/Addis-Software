import ReactDom from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './store.js'

const container = document.getElementById("root")
const root = ReactDom.createRoot(container)
root.render(
    <Provider store={store}>
        <App />
    </Provider>

)