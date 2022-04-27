/* eslint-disable react-native/no-raw-text */
import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetailApi, getImageApi } from '../../const/api'
import { StandartText, StandartArrayText } from './description'
import heart from '../../assest/hearth.png'
import emptyHearth from '../../assest/emptyHearth.png'
import { addFavorites, deleteFavorites } from '../../redux/action'
import { favoritesDataMemo } from '../../redux/selector'

const DetailScreen = ({ route, navigation }) => {
  const movies = useSelector(favoritesDataMemo)
  const [data, setData] = React.useState('')
  const [isFavori, setIsFavori] = React.useState(false)

  const dispatch = useDispatch()

  React.useEffect(() => {
    axios(getMovieDetailApi(route.params))
      .then((res) => {
        setIsFavori(movies.includes(res.data.id))
        setData(res.data)
      })
  }, [])

  const favoritesButton = () => {
    // eslint-disable-next-line no-unused-expressions
    isFavori
      ? dispatch(deleteFavorites(data.id))
      : dispatch(addFavorites(data.id))
    setIsFavori(!isFavori)
  }

  navigation.setOptions({
    title: data.original_title,
    headerRight: () => (
      <>
        <TouchableOpacity onPress={favoritesButton}>
          <Image source={isFavori ? heart : emptyHearth} style={styles.buttonStyle} />
        </TouchableOpacity>

      </>
    )
  })

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: getImageApi + data.poster_path }} />
      <View style={styles.textContainer}>
        <StandartText data={data.overview} category="Description :" />
        <Text style={styles.tagline}>{data.tagline}</Text>
        <StandartText data={data.release_date} category="Relase Date :" />
        <StandartArrayText data={data.genres} category="genres :" />
        <StandartText data={data.popularity} category="Popülarity :" />
        <StandartText data={data.status} category="Status :" />
        <StandartText data={data.vote_count} category="Vote Count :" />
        <StandartText data={data.vote_average} category="Star 10 /" />
        <StandartArrayText data={data.production_countries} category="production contry :" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131722'
  },
  textContainer: {
    padding: 12
  },
  imageStyle: {
    width: '100%',
    height: 500
  },
  tagline: {
    paddingBottom: 50,
    color: 'aqua'
  },
  buttonStyle: {
    height: 40,
    width: 40
  }
})

export default DetailScreen
