/* eslint-disable import/prefer-default-export */
import React from 'react'
import {
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View,
  StyleSheet
} from 'react-native'
import BigList from 'react-native-big-list'
import { getImageApi } from '../../const/api'

export const Biglist = ({
  data, page, setPage, category
}) => (
  <View style={styles.container}>

    <Text style={styles.headerTextStyle}>
      ----
      {category}
    </Text>

    <ScrollView
      horizontal
      contentContainerStyle={styles.scroolStyle}
    >
      <BigList
        bounces={false}
        scrollEnabled={false}
        numColumns={page * 20}
        itemHeight={100}
        data={data}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={styles.mooreButton}
        onPress={() => setPage(page + 1)}
      >
        <Text style={styles.threePointStyle}>...</Text>

      </TouchableOpacity>
    </ScrollView>
  </View>
)

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.cardStyle}
      onPress={() => console.log(item)}
    >

      <Image
        style={styles.pictureStyle}
        source={{ uri: getImageApi + item.backdrop_path }}
      />

      <Text style={styles.movieNameText}>
        {item.original_title}
        {' '}
        sdads
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70
  },
  headerTextStyle: {
    fontSize: 20,
    color: 'pink',
    paddingLeft: 10
  },
  scroolStyle: {
    height: 260
  },
  mooreButton: {
    justifyContent: 'center'
  },
  threePointStyle: {
    fontSize: 50,
    marginBottom: 40
  },
  cardStyle: {
    alignItems: 'center',
    padding: 10
  },
  pictureStyle: {
    height: 160,
    width: 120,
    borderRadius: 10,
    paddingTop: 20
  },
  movieNameText: {
    textAlign: 'center',
    width: 120
  }

})
