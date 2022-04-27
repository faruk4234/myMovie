import React from 'react'

import { createStore } from 'redux'
import { Provider, useStore, useDispatch } from 'react-redux'
import { reducer } from './src/redux/reducer/reducer'
import { getData } from './src/const/asyncStorage'
import Screen from './src/screen'
import { addFavorites } from './src/redux/action/action'

const store = createStore(reducer)

const App = () => {
  getData().then((x) => console.log(x))
  return (
    <Provider store={store}>
      <Screen />
    </Provider>

  )

}

export default App
