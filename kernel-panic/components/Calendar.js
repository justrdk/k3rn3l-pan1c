import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Day from './Day'

const PORTRAIT = 'PORTRAIT'
const LANDSCAPE = 'LANDSCAPE'

const renderWeek = days => days.map((day, index) => <Day day={day.day} date={day.date} key={index} />)

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orientation: PORTRAIT,
      weekIndex: 0
    }
  }

  detectScreenOrientation = (ev) => {
    const { width, height } = Dimensions.get('window')
    this.setState({
      orientation: width > height ? LANDSCAPE : PORTRAIT
    })
  }

  render() {
    const { weeks } = this.props
    const { orientation, weekIndex } = this.state
    const daysToShow = orientation === PORTRAIT ? weeks[weekIndex].days.slice(0, 5) : weeks[weekIndex].days

    return (
      <View onLayout={this.detectScreenOrientation} style={styles.calendar}>
        {renderWeek(daysToShow)}
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