import React from 'react'
import {
  View, Image, StyleSheet, Text
} from 'react-native'
import { Biglist } from './bigList'
import color from '../../const/color'

const SearchScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.headerTextStyle}>
        𝕸𝖄 𝖋𝖆𝖛𝖔𝖗𝖎𝖙𝖊𝖘
      </Text>
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
    alignItems: 'center',
    backgroundColor: '#131722',
  },
  headerTextStyle: {
    color: color.primaryOrange,
    fontStyle: 'italic',
    fontSize: 40,
  }
})

export default SearchScreen
