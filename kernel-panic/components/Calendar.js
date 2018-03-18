import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Day from './Day'
import Header from './Header'
import Footer from './Footer'

const PORTRAIT = 'PORTRAIT'
const LANDSCAPE = 'LANDSCAPE'

const renderWeek = (days, selectDay) => days.map((day, index) => <Day day={day.day} date={day.date} key={index} selectDay={selectDay}/>)

const CalendarNav = ({ onPress, text }) => <TouchableOpacity onPress={onPress}><Text>{text}</Text></TouchableOpacity>

CalendarNav.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string
}

class Calendar extends Component {
  state = {
    orientation: PORTRAIT,
    weekIndex: 0,
    selectedDay: 'N/A'
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

  selectDay = (day, date) => {
    this.setState({
      selectedDay: `${day}, ${date}`
    })
  }

  loadRandomWeek = () => {
    const { weeks } = this.props
    const max = weeks.length - 1
    this.setState({
      weekIndex: Math.floor(Math.random() * Math.floor(max))
    })
  }

  render() {
    const { weeks } = this.props
    const { orientation, weekIndex, selectedDay } = this.state
    const daysToShow = orientation === PORTRAIT ? weeks[weekIndex].days.slice(0, 5) : weeks[weekIndex].days

    return (
      <View style={styles.container}>
        <Header loadRandomWeek={this.loadRandomWeek} />
        <View style={styles.calendarNav}>
          {weekIndex > 0 && <CalendarNav onPress={this.back} text={"Prev Week"} />}
          {(weekIndex < weeks.length - 1) && <CalendarNav onPress={this.next} text={"Next Week"} />}
        </View>
        <View onLayout={this.detectScreenOrientation} style={styles.calendar}>
          {renderWeek(daysToShow, this.selectDay)}
        </View>
        <View style={styles.dateDescription}>
          <Text>Selected Day: {selectedDay}</Text>
        </View>
        <Footer />
      </View>
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
  container: {
    flex: 1,
  },
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
    alignItems: 'center',
    backgroundColor: '#e84393'
  },
  dateDescription: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ff7675'
  }
})

export default Calendar