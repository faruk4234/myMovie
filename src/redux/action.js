import {
  getTopRatedMovieApi,
  getUpcomingMovieApi,
  getPopularMovieApi,
  nowPlayingApi,
  searchMovieApi
} from '../const/api'

export const addFavorites = (id) => ({ type: 'ADD_FAVORI', id })

export const deleteFavorites = (id) => ({ type: 'DELETE_FAVORI', id })

export const getTopRankedMovies = (page) => ({ type: 'GET_DATAS', URL: getTopRatedMovieApi + page, category: 'ADD_TOP_RANKED' })

export const getUpComingMovies = (page) => ({ type: 'GET_DATAS', URL: getUpcomingMovieApi + page, category: 'ADD_UPCOMİNG' })

export const getPopularMovies = (page) => ({ type: 'GET_DATAS', URL: getPopularMovieApi + page, category: 'ADD_POPULAR' })

export const getNowPlayingMovies = (page) => ({ type: 'GET_DATAS', URL: nowPlayingApi + page, category: 'ADD_NOWPLAYİNG' })

export const getSearchMovies = (value) => ({ type: 'GET_DATAS', URL: searchMovieApi + value, category: 'SEARCH_MOVİES' })
