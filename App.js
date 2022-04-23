import React from "react";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import Screen from './src/screen'

const App=()=>(
    <Screen/>
)

export default App