import React from 'react'
import {
  View, Text, Image, TouchableOpacity
} from 'react-native'
import axios from 'axios'
import { getTopRatedMovieApi, getImageApi } from '../../const/api'
import { Biglist } from './BigList'

const SearchScreen = () => {
  const [dataTop, setDataTop] = React.useState(Array)
  const [topDataPage, setTopDataPage] = React.useState(1)

  React.useEffect(() => {
    axios
      .get(getTopRatedMovieApi + topDataPage)
      .then((res) => setDataTop([...dataTop, ...res.data.results]))
  }, [])

  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center'
    }}
    >
      <Biglist data={dataTop} />
    </View>
  )
}

export default SearchScreen
