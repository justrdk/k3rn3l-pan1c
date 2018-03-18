import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Calendar from './components'
import week from './week'

const App = () => <View style={styles.container}>
  <View style={styles.header}>
    <Button
      onPress={() => true}
      title="Load Random Week"
      color="#0984e3"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
  <Calendar week={week} />
  <View style={styles.footer}>
    <Text>By Osman Hernandez</Text>
  </View>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#00b894',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#00b894',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App