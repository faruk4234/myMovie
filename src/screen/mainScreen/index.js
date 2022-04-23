import React from 'react'
import {
  View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native'
import axios from 'axios'
import { getTopRatedMovieApi, nowPlayingApi, getPopularMovieApi } from '../../const/api'
import { Biglist } from './BigList'

const SearchScreen = () => {

  // top Ranked Movies
  const [dataTop, setDataTop] = React.useState(Array)
  const [topDataPage, setTopDataPage] = React.useState(1)
  React.useEffect(() => {
    axios
      .get(getTopRatedMovieApi + topDataPage)
      .then((res) => setDataTop([...dataTop, ...res.data.results]))
  }, [topDataPage])

  // popüler Movies
  const [dataPopüler, setDataPopüler] = React.useState(Array)
  const [popülerDataPage, setDataPopülerPage] = React.useState(1)
  React.useEffect(() => {
    axios
      .get(getPopularMovieApi + popülerDataPage)
      .then((res) => setDataPopüler([...dataPopüler, ...res.data.results]))
  }, [popülerDataPage])

  // now playing movies
  const [dataPlaying, setDataPlaying] = React.useState(Array)
  const [playingPage, setPlayingPage] = React.useState(1)
  React.useEffect(() => {
    axios
      .get(nowPlayingApi + playingPage)
      .then((res) => setDataPlaying([...dataPlaying, ...res.data.results]))
  }, [popülerDataPage])

  return (
    <ScrollView style={{ flex: 1 }}>

      <Biglist
        data={dataTop}
        page={topDataPage}
        setPage={setTopDataPage}
        category="Top Ranked movie"
      />

      <Biglist
        data={dataPopüler}
        page={popülerDataPage}
        setPage={setDataPopülerPage}
        category="Popular"
      />

      <Biglist
        data={dataPlaying}
        page={playingPage}
        setPage={setPlayingPage}
        category="Now Playing"
      />

    </ScrollView>

  )
}

export default SearchScreen
