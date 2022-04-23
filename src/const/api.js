/* eslint-disable import/prefer-default-export */
const apiKey = '62dd1b1052927487ffe6c9ce06e65f76'

export const searchMovieApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`

// page count is required
export const nowPlayingApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=`

export const getPopularMovieApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`

export const getTopRatedMovieApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=`

export const getImageApi = 'https://www.themoviedb.org/t/p/w1280/'
