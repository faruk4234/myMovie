/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
const initalState = {
  movies: []
}

// eslint-disable-next-line consistent-return
export const reducer = (state = initalState, action) => {
  switch (action.type) {
  case 'ADD': {
    console.log('add')
    // eslint-disable-next-line no-param-reassign
    state.movies = [...state.movies, action.id]
    return { ...state }
  }
  case 'DELETE': {
    // eslint-disable-next-line no-param-reassign
    state.movies = state.movies.filter((movie) => movie.id !== action.id)
    return { ...state }
  }
  case 'CHECK': {
    const x = (state.movies.find((movie) => movie === action.id))
    console.log(x)
    return x
  }
  default: {
    return state
  }
  }
}
