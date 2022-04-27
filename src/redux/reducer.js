/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import { storeData } from '../const/asyncStorage'

const initalState = {
  movies: []
}

// eslint-disable-next-line consistent-return
export const reducer = (state = initalState, action) => {

  console.log()
  switch (action.type) {
  case 'ADD': {
    // eslint-disable-next-line no-param-reassign
    state.movies = [...state.movies, action.id]
    return { ...state }
  }
  case 'DELETE': {
    // eslint-disable-next-line no-param-reassign
    state.movies = state.movies.filter((movie) => movie !== (action.id))
    return { ...state }
  }
  default: {
    return state
  }
  }
}