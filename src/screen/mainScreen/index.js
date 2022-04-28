import React from 'react'
import {
  ScrollView,
  StyleSheet
} from 'react-native'
import { useSelector } from 'react-redux'
import { Biglist } from './bigList'
import {
  getNowPlayingMovies,
  getUpComingMovies,
  getTopRankedMovies,
  getPopularMovies
} from '../../redux/action'
import {
  topRankedDataMemo,
  popularDataMemo,
  nowPLayingDataMemo,
  upComingDataMemo
} from '../../redux/selector'

import color from '../../const/color'

const SearchScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>

      <Biglist
        data={useSelector(topRankedDataMemo)}
        category="Top Ranked movie"
        action={getTopRankedMovies}
        navigation={navigation}
      />

      <Biglist
        data={useSelector(popularDataMemo)}
        category="Popular"
        action={getPopularMovies}
        navigation={navigation}
      />

      <Biglist
        data={useSelector(nowPLayingDataMemo)}
        action={getNowPlayingMovies}
        category="Now Playing"
        navigation={navigation}
      />

      <Biglist
        data={useSelector(upComingDataMemo)}
        action={getUpComingMovies}
        category="Upcoming"
        navigation={navigation}
      />

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBlack
  }
})

export default SearchScreen
