import { Text, View, StyleSheet } from 'react-native'
import * as React from 'react'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'

function HomeScreen() {
  const [term, setTerm] = useState('')

  return (
    <View style={styles.wrapper}>
      <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} />
      <Text>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
})

export default HomeScreen
