import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TicTacToe from './components/TicTacToe'

const App = () => {
  return (
    <SafeAreaView>
      <>
        <TicTacToe />
      </>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})