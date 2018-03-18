import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Calendar, { Header, Footer } from './components'
import week from './week'

const App = () => <View style={styles.container}>
  <Header />
  <Calendar week={week} />
  <Footer />
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App