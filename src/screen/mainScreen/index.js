import React from 'react'
import {
  ScrollView,
  StyleSheet
} from 'react-native'
import {
  getTopRatedMovieApi,
  nowPlayingApi,
  getPopularMovieApi,
  getUpcomingMovieApi
} from '../../const/api'
import { Biglist } from './bigList'

const SearchScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>

      <Biglist
        api={getTopRatedMovieApi}
        category="Top Ranked movie"
        navigation={navigation}
      />

      <Biglist
        api={getPopularMovieApi}
        category="Popular"
        navigation={navigation}
      />

      <Biglist
        api={nowPlayingApi}
        category="Now Playing"
        navigation={navigation}
      />

      <Biglist
        api={getUpcomingMovieApi}
        category="Upcoming"
        navigation={navigation}
      />

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131722'
  }
})

export default SearchScreen
