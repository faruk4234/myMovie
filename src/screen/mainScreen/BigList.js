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

export const Biglist = ({
  api, category
}) => {
  const [data, setData] = React.useState(Array)
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    axios
      .get(api + page)
      .then((res) => setData([...data, ...res.data.results]))
  }, [])

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
          renderItem={renderItem}
        />

        <TouchableOpacity
          style={styles.mooreButton}
          onPress={() => console.log(api)}
        >
          <Text style={styles.threePointStyle}>...</Text>

        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

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
    paddingLeft: 10
  },
  scroolStyle: {
    height: 200
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
    borderWidth: 0.5,
    backgroundColor: 'pink',
    height: 150,
    width: 120,
    borderRadius: 15,
    paddingTop: 20
  },
  movieNameText: {
    textAlign: 'center',
    width: 120
  }

})
