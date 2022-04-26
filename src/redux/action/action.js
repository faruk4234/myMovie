export const addFavorites = (id) => ({ type: 'ADD', movieId: id })

export const deleteFavorites = (id) => ({ type: 'DELETE', movieId: id })

export const checkMovie = (id) => ({ type: 'CHECK', movieId: id })
