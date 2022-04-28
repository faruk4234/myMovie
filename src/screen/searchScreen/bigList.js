/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
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
import { getImageApi } from '../../const/api'
import color from '../../const/color'
import { searchingDataMemo } from '../../redux/selector'

export const Biglist = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <BigList
        itemHeight={200}
        data={useSelector(searchingDataMemo)}
        renderItem={(x) => <RenderItem data={x} navigation={navigation} />}
      />
    </View>
  )
}

const RenderItem = ({ data, navigation }) => {

  const {
    backdrop_path, original_title, popularity, release_date, id
  } = data.item

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
    color: color.primaryGreen,
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
