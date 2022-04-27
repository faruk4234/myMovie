import React from 'react'
import {
  View, Image, StyleSheet
} from 'react-native'
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
