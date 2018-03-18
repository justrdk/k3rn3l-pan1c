import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, StyleSheet } from 'react-native'

const Header = ({ loadRandomWeek }) => <View style={styles.header}>
  <Button
    onPress={loadRandomWeek}
    title="Load Random Week"
    color="#0984e3"
    accessibilityLabel="Learn more about this purple button"
  />
</View>

Header.propTypes = {
  loadRandomWeek: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#00b894',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Header