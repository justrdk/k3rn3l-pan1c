import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Day = ({ day, date, selectDay }) => <TouchableOpacity onPress={() => selectDay(day, date)}>
  <View style={styles.day}>
    <Text>{day}</Text>
    <Text>{date}</Text>
  </View>
</TouchableOpacity>

Day.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  selectDay: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  day: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Day