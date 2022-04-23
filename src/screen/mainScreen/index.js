import React from 'react'
import {
  View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native'
import axios from 'axios'
import { getTopRatedMovieApi, nowPlayingApi, getPopularMovieApi } from '../../const/api'
import { Biglist } from './bigList'

const SearchScreen = () => {

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

      <Biglist
        api={getTopRatedMovieApi}
        category="Top Ranked movie"
      />

      <Biglist
        api={getPopularMovieApi}
        category="Popular"
      />

      <Biglist
        api={nowPlayingApi}
        category="Now Playing"
      />

    </ScrollView>

  )
}

export default SearchScreen
