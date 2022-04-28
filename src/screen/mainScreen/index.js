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
        category="𝕿𝖔𝖕 𝕽𝖆𝖓𝖐𝖊𝖉 𝕸𝖔𝖛𝖎𝖊"
        action={getTopRankedMovies}
        navigation={navigation}
      />

      <Biglist
        data={useSelector(popularDataMemo)}
        category="𝕻𝖔𝖕𝖚𝖑𝖆𝖗"
        action={getPopularMovies}
        navigation={navigation}
      />

      <Biglist
        data={useSelector(nowPLayingDataMemo)}
        action={getNowPlayingMovies}
        category="𝕹𝖔𝖜 𝕻𝖑𝖆𝖞𝖎𝖓𝖌"
        navigation={navigation}
      />

      <Biglist
        data={useSelector(upComingDataMemo)}
        action={getUpComingMovies}
        category="𝖀𝖕𝖈𝖔𝖒𝖎𝖓𝖌"
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
