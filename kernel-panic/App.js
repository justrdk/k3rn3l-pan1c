import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Calendar, { Header, Footer } from './components'
import weeks from './weeks'
import { getWeeks } from './services/weeks'
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

const App = () => <Calendar
  weeks={weeks.weeks}
  asyncWeeks={false}
  serviceCall={getWeeks}
  url={"/foo"}
  options={options} />

export default App