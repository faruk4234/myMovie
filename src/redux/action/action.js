import { useDispatch } from 'react-redux'

const dispatch = useDispatch()

export const addFavorites = (id) => dispatch({ type: 'ADD', movieId: id })

export const deleteFavorites = (id) => dispatch({ type: 'DELETE', movieId: id })

export const checkMovie = (id) => dispatch({ type: 'CHECK', movieId: id })
