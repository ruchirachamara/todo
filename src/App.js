import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import SplashScreen from 'react-native-splash-screen'

import rootReducer from '../src/reducers/rootReducer'

import Routes from '../src/routes'

export default class App extends Component {
  
    constructor(props) {
        super(props)
        this.store = createStore(
            rootReducer, 
            applyMiddleware(thunk)
        )
    }

    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (
            <Provider store={this.store}>                
                <Routes />
            </Provider>
        )
    }
}