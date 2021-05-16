import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import ProgressBar from '../ProgressBar'

const CategoryCard = ({ title, color, taskCount, completed }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.count}>{taskCount} tasks</Text>
      <Text style={styles.title}>{title}</Text>
      <ProgressBar progress={100*completed/taskCount} color={color} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 230,
    justifyContent: 'center',
    paddingLeft: 25,
    marginRight: 15,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowColor: '#11225B'
  },
  count: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#A9B1CC',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#26315B',
    marginTop: 7,
    marginBottom: 10
  }
})

export default CategoryCard
