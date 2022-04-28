import React from 'react'

import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './src/redux/reducer'
import Saga from './src/redux/saga'
import Screen from './src/screen'

const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(Saga)

const App = () => {

  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  )
}

export default App
