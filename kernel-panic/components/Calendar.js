import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Day from './Day'

const PORTRAIT = 'PORTRAIT'
const LANDSCAPE = 'LANDSCAPE'

const renderWeek = days => days.map((day, index) => <Day day={day.day} date={day.date} key={index}/>)

const CalendarNav = ({ onPress, text }) => <TouchableOpacity onPress={onPress}><Text>{text}</Text></TouchableOpacity>

CalendarNav.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string
}

class Calendar extends Component {
  state = {
    orientation: PORTRAIT,
    weekIndex: 0,
  }

  detectScreenOrientation = (ev) => {
    const { width, height } = Dimensions.get('window')
    this.setState({
      orientation: width > height ? LANDSCAPE : PORTRAIT
    })
  }

  back = () => {
    this.setState({
      weekIndex: this.state.weekIndex - 1
    })
  }

  next = () => {
    this.setState({
      weekIndex: this.state.weekIndex + 1
    })
  }

  render() {
    const { weeks } = this.props
    const { orientation, weekIndex } = this.state
    const daysToShow = orientation === PORTRAIT ? weeks[weekIndex].days.slice(0, 5) : weeks[weekIndex].days

    return (
      <Fragment>
        <View style={styles.calendarNav}>
          {weekIndex > 0 && <CalendarNav onPress={this.back} text={"Prev Week"} />}
          {(weekIndex < weeks.length - 1) && <CalendarNav onPress={this.next} text={"Next Week"} />}
        </View>
        <View onLayout={this.detectScreenOrientation} style={styles.calendar}>
          {renderWeek(daysToShow)}
        </View>
      </Fragment>
    )
  }
}

Calendar.propTypes = {
  weeks: PropTypes.array
}

Calendar.defaultProps = {
  weeks: []
}

const styles = StyleSheet.create({
  calendar: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ff7675',
  },
  calendarNav: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

export default Calendar