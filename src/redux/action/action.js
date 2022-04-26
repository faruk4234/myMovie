export const addFavorites = ({ id }) => {
  return {
    type: 'ADD',
    id
  }
}

export const deleteFavorites = (id) => {
  return {
    type: 'DELETE',
    id
  }
}

export const checkMovie = (id) => {
  return {
    type: 'CHECK',
    id
  }
}
