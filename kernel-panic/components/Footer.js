import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Footer = () => <View style={styles.footer}>
  <Text>By Osman Hernandez</Text>
</View>

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#00b894',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Footer