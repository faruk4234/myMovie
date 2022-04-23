import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import BigList from 'react-native-big-list'
import { getTopRatedMovieApi, getImageApi } from '../../const/api'

export const Biglist = ({ data }) => <BigList itemHeight={150} data={data} renderItem={renderItem} />

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => console.log(item)}>
      <Image style={{ height: 100, width: 50, borderRadius: 10 }} source={{ uri: getImageApi + item.backdrop_path }} />
    </TouchableOpacity>
  )
}
