import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, StyleSheet } from 'react-native'

const Header = () => <View style={styles.header}>
  <Button
    onPress={() => true}
    title="Load Random Week"
    color="#0984e3"
    accessibilityLabel="Learn more about this purple button"
  />
</View>

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#00b894',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Header