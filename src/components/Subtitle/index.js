import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Subtitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{title.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30
  },
  subtitle: {
    fontSize: 14,
    color: '#9BA2BC',
    fontWeight: 'bold'
  }
})

export default Subtitle