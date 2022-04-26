import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './src/redux/reducer/reducer'

import Screen from './src/screen'

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Screen />
  </Provider>
)

export default App
