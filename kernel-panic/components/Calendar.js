import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Day from './Day'

const PORTRAIT = 'PORTRAIT'
const LANDSCAPE = 'LANDSCAPE'

const renderWeek = week => Object.keys(week).map((day, index) => <Day day={day} date={week[day]} key={index} />)

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orientation: PORTRAIT
    }
  }

  detectScreenOrientation = (ev) => {
    const { width, height } = Dimensions.get('window')
    this.setState = {
      orientation: width > height ? LANDSCAPE : PORTRAIT
    }
  }

  render() {
    const { week } = this.props
    return (
      <View onLayout={this.detectScreenOrientation}  style={styles.calendar}>
        {renderWeek(week)}
      </View>)
  }
}

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ff7675',
  },
})

export default Calendar