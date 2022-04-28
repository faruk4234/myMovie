export default {
  try: () => {
    return fetch('https://reactnative.dev/movies.json').then((res) => res.json())
  }
}
