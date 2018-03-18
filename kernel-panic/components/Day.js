import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

const Day = ({ day, date }) => <View style={styles.day}>
  <Text>{day}</Text>
  <Text>{date}</Text>
</View>

Day.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  day: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Day