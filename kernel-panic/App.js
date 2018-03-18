import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Calendar, { Header, Footer } from './components'
import weeks from './weeks'

const App = () => <Calendar weeks={weeks.weeks} />

export default App