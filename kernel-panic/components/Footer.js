import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Footer = () => <View style={styles.footer}>
  <Text style={styles.footerText}>By Osman Hernandez</Text>
</View>

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#00b894',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
  	color: '#0984e3',
  	fontSize: 20
  }
})

export default Footer