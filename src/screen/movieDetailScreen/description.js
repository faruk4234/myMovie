/* eslint-disable react-native/no-raw-text */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import color from '../../const/color'

export const StandartText = ({ data, category }) => (
  <Text style={styles.detailsTextStyle}>
    {category}
    <Text style={styles.subDescriptionTexts}>{data}</Text>
  </Text>
)

export const StandartArrayText = ({ data, category }) => (
  <Text style={styles.detailsTextStyle}>
    {category}
    {data
      ? data.map((x) => (
        <Text style={styles.subDescriptionTexts}>
          {x.name}
          ,
        </Text>
      )) : null}
  </Text>
)

const styles = StyleSheet.create({
  detailsTextStyle:
    {
      color: color.primaryGreen,
      fontSize: 18,
      paddingBottom: 50
    },
  subDescriptionTexts: {
    color: color.secondryOrange
  },

})
