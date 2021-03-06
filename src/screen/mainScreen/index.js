import React from 'react'
import {
  ScrollView,
  StyleSheet,
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
        category="πΏππ π½πππππ πΈππππ"
        action={getTopRankedMovies}
        navigation={navigation}
      />

      <Biglist
        data={useSelector(popularDataMemo)}
        category="π»ππππππ"
        action={getPopularMovies}
        navigation={navigation}
      />

      <Biglist
        data={useSelector(nowPLayingDataMemo)}
        action={getNowPlayingMovies}
        category="πΉππ π»ππππππ"
        navigation={navigation}
      />

      <Biglist
        data={useSelector(upComingDataMemo)}
        action={getUpComingMovies}
        category="ππππππππ"
        navigation={navigation}
      />

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: color.primaryBlack,
  }
})

export default SearchScreen
