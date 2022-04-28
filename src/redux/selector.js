/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect'

// sellector
export const favoritesDataMemo = createSelector(
  (state) => state.movies,
  (movies) => {
    console.log(movies)
    return movies
  }
)
