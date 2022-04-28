/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import React from 'react'
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native'
import BigList from 'react-native-big-list'
import { useSelector } from 'react-redux'
import { getImageApi, getMovieDetailApi } from '../../const/api'
import { favoritesDataMemo } from '../../redux/selector'

export const Biglist = ({ navigation }) => {
  const movies = useSelector(favoritesDataMemo)

  return (
    <View style={styles.container}>

      <BigList
        itemHeight={200}
        data={movies}
        renderItem={(x) => <RenderItem data={x} movies={movies} navigation={navigation} />}
      />
    </View>
  )
}

const RenderItem = ({ data, navigation, movies }) => {

  const [movieData, setMovieData] = React.useState('')
  React.useEffect(() => {
    console.log(movies)
    axios(getMovieDetailApi(data.item))
      .then((datas) => {
        setMovieData(datas.data)
      })
  }, [movies])

  const {
    backdrop_path,
    original_title,
    popularity,
    release_date,
    id,
    vote_average
  } = movieData

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('detailScreen', id)}
      style={styles.cardContainer}
    >

      <Image
        style={styles.pictureStyle}
        source={{ uri: getImageApi + backdrop_path }}
      />

      <View style={styles.textBarStyle}>
        <Text style={styles.movieNameText}>{original_title}</Text>
        <Text style={styles.descriptionText}>{popularity}</Text>
        <Text style={styles.descriptionText}>{release_date}</Text>
        <Text style={styles.descriptionText}>
          Star:
          {vote_average}
        </Text>
      </View>

    </TouchableOpacity>

  )

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10
  },
  cardContainer: {
    flexDirection: 'row'
  },
  pictureStyle: {
    borderWidth: 0.2,
    backgroundColor: 'gray',
    height: 150,
    width: 120,
    borderRadius: 15,
    paddingTop: 20
  },
  movieNameText: {
    fontSize: 18,
    alignItems: 'flex-start',
    paddingLeft: 10,
    color: '#23B19B',
    maxWidth: '84%'
  },
  descriptionText: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    paddingRight: 120,
    padding: 10
  },
  textBarStyle: {
    height: 150
  }

})
