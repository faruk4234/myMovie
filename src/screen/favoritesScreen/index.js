import React from 'react'
import {
  View, TextInput, Image, StyleSheet
} from 'react-native'
import axios from 'axios'
import { getMovieDetailApi } from '../../const/api'
import { Biglist } from './bigList'

const SearchScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Biglist
        navigation={navigation}
      />

      <Image />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: 'flex-start',
    backgroundColor: '#131722'
  },
})

export default SearchScreen
