import React from 'react'
import {
  View, TextInput, Image, StyleSheet
} from 'react-native'
import axios from 'axios'
import { searchMovieApi } from '../../const/api'
import { Biglist } from './bigList'

const SearchScreen = ({ navigation }) => {

  const [value, onChangeText] = React.useState('')
  const [data, setData] = React.useState('')

  React.useEffect(() => {
    axios
      .get(searchMovieApi + value)
      .then((res) => setData(res.data.results))
  }, [value])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        onChangeText={(x) => onChangeText(x)}
        value={value}
        placeholder="movie name"
      />

      <Biglist
        data={data}
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
  searchBar: {
    backgroundColor: 'white',
    width: '90%',
    height: 35,
    margin: 12,
    borderWidth: 0.2,
    borderRadius: 40,
    padding: 10,
  }
})

export default SearchScreen
