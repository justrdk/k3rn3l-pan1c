import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import weeks from '../weeks'

const Day = () => <View>
  <Text>MON</Text>
  <Text>1</Text>
</View>

const Calendar = () => <View style={styles.calendar}>
	<Day />
  <Day />
  <Day />
  <Day />
  <Day />
</View>

const styles  = StyleSheet.create({
	calendar: {
    marginTop: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'red'
  },
  day: {
    backgroundColor: 'blue',
  },
})

export default Calendar