/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import { storeData } from '../const/asyncStorage'

const initalState = {
  favori_movies: [],
  top_Ranked_movies: [],
  upComing_movies: [],
  nowPlaying_movies: [],
  popular_movies: [],
  searching_movies: []
}

// eslint-disable-next-line consistent-return
export const reducer = (state = initalState, action) => {

  switch (action.type) {
  case 'ADD': {
    state.favori_movies = [...state.favori_movies, action.id]
    storeData(state.favori_movies)
    return { ...state }
  }
  case 'GET_LOCALS': {
    state.favori_movies = [...action.datas]
    return { ...state }
  }
  case 'DELETE': {
    state.favori_movies = state.favori_movies.filter((movie) => movie !== (action.id))
    storeData(state.favori_movies)
    return { ...state }
  }
  case 'ADD_TOP_RANKED': {
    state.top_Ranked_movies = [...state.top_Ranked_movies, ...action.datas]
    return { ...state }
  }
  case 'ADD_UPCOMİNG': {
    state.upComing_movies = [...state.upComing_movies, ...action.datas]
    return { ...state }
  }
  case 'ADD_POPULAR': {
    state.popular_movies = [...state.popular_movies, ...action.datas]
    return { ...state }
  }
  case 'ADD_NOWPLAYİNG': {
    state.nowPlaying_movies = [...state.nowPlaying_movies, ...action.datas]
    return { ...state }
  }
  case 'SEARCH_MOVİES': {
    state.searching_movies = action.datas
    return { ...state }
  }
  default: {
    return state
  }
  }
}
