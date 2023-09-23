import { StyleSheet, TextInput, View } from 'react-native'
import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

function SearchBar({ term, onTermChange }) {
  return (
    <View style={styles.searchInput}>
      <Ionicons name="search" size={28} color="black" />
      <TextInput
        style={styles.searchPlaceHolder}
        placeholder={'Search'}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#d5d0d0',
    height: 40,
    width: '90%',
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 6,
  },
  searchPlaceHolder: {
    marginLeft: 10,
    fontSize: 20,
    flex: 1,
  },
})

export default SearchBar
