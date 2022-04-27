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
import { useStore } from 'react-redux'
import { getImageApi, getMovieDetailApi } from '../../const/api'

export const Biglist = ({ navigation }) => {
  const store = useStore().getState()

  const [data, setData] = React.useState('')

  React.useEffect(() => {
    setData(store.movies)
  }, [store.movies])

  console.log(data)
  return (
    <View style={styles.container}>

      <BigList
        itemHeight={200}
        data={data}
        renderItem={(x) => <RenderItem data={x} navigation={navigation} />}
      />
    </View>
  )
}

const RenderItem = ({ data, navigation }) => {

  const [movieData, setMovieData] = React.useState('')
  React.useEffect(() => {
    console.log(data.item)
    axios(getMovieDetailApi(data.item))
      .then((datas) => {
        setMovieData(datas.data)
      })
  }, [])

  const {
    backdrop_path, original_title, popularity, release_date, id
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
