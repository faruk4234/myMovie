/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect'

// sellector
export const favoritesDataMemo = createSelector(
  (state) => state.favori_movies,
  (movies) => {
    return movies
  }
)

export const searchingDataMemo = createSelector(
  (state) => state.searching_movies,
  (movies) => {
    return movies
  }
)

export const topRankedDataMemo = createSelector(
  (state) => state.top_Ranked_movies,
  (movies) => {
    return movies
  }
)

export const upComingDataMemo = createSelector(
  (state) => state.upComing_movies,
  (movies) => {
    return movies
  }
)

export const nowPLayingDataMemo = createSelector(
  (state) => state.nowPlaying_movies,
  (movies) => {
    return movies
  }
)

export const popularDataMemo = createSelector(
  (state) => state.popular_movies,
  (movies) => {
    return movies
  }
)
