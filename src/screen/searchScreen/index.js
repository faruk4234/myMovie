import React from 'react'
import {
  View, TextInput, Image, StyleSheet
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Biglist } from './bigList'
import { getSearchMovies } from '../../redux/action'
import color from '../../const/color'

const SearchScreen = ({ navigation }) => {

  const [value, onChangeText] = React.useState('')

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getSearchMovies(value))
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
    backgroundColor: color.primaryBlack
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
