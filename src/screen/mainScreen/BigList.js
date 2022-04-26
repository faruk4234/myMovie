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
import axios from 'axios'
import { getImageApi } from '../../const/api'

export const Biglist = ({ api, category, navigation }) => {

  const [data, setData] = React.useState(Array)
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    axios
      .get(api + page)
      .then((res) => setData([...data, ...res.data.results]))
  }, [page])

  return (
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
          itemHeight={200}
          data={data}
          renderItem={(x) => <RenderItem data={x} navigation={navigation} />}
        />

        <TouchableOpacity
          style={styles.mooreButton}
          onPress={() => setPage(page + 1)}
        >
          <Text style={styles.threePointStyle}>moore</Text>

        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const RenderItem = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.cardStyle}
      onPress={() => navigation.navigate('detailScreen', data.item.id)}
    >

      <Image
        style={styles.pictureStyle}
        source={{ uri: getImageApi + data.item.backdrop_path }}
      />

      <Text style={styles.movieNameText}>
        {data.item.original_title}
        {' '}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 70
  },
  headerTextStyle: {
    fontSize: 20,
    color: 'pink',
    paddingLeft: 10,
    padding: 15
  },
  scroolStyle: {
    height: 200
  },
  mooreButton: {
    justifyContent: 'center'
  },
  threePointStyle: {
    transform: [{ rotate: '-90deg' }],
    fontSize: 20,
    marginBottom: 40,
    color: 'pink',
    borderWidth: 0.2,
    borderColor: 'pink',
    borderRadius: 15,
    marginRight: 20,
  },
  cardStyle: {
    paddingHorizontal: 5,
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
    paddingTop: 5,
    textAlign: 'center',
    color: '#23B19B',
    width: 120
  }

})
