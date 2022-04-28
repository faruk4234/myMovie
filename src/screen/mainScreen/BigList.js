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
import { useDispatch } from 'react-redux'
import { getImageApi } from '../../const/api'
import color from '../../const/color'

export const Biglist = ({
  data, category, navigation, action
}) => {
  const dispatch = useDispatch()
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    dispatch((action(page)))
  }, [page])

  return (
    <View style={styles.container}>

      <Text style={styles.headerTextStyle}>{category}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={styles.scroolStyle}
      >
        <BigList
          bounces={false}
          scrollEnabled={false}
          numColumns={page * 20}
          itemHeight={210}
          data={data}
          renderItem={(x) => <RenderItem data={x} navigation={navigation} />}
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
    paddingTop: 60,
    bottom: 10
  },
  headerTextStyle: {
    fontSize: 25,
    color: '#23B19B',
    paddingLeft: 10,
    padding: 15,
    fontStyle: 'oblique',
  },
  scroolStyle: {
    height: 200
  },
  mooreButton: {
    justifyContent: 'center'
  },
  threePointStyle: {
    transform: [{ rotate: '-180deg' }],
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 100,
    marginBottom: 0,
    color: '#23B19B',
    borderRadius: 15,
  },
  cardStyle: {
    paddingHorizontal: 5,
  },
  pictureStyle: {
    borderWidth: 0.2,
    backgroundColor: 'gray',
    height: 140,
    width: 120,
    borderRadius: 15,
    paddingTop: 20
  },
  movieNameText: {
    paddingTop: 5,
    textAlign: 'center',
    color: color.secondryOrange,
    width: 120,
    fontStyle: 'italic',

  }

})
