/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */

const initalState = {
  movies: []
}

// eslint-disable-next-line consistent-return
export const reducer = (state = initalState, action) => {

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
