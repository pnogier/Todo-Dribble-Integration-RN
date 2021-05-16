import React from 'react'
import { View, StyleSheet } from 'react-native'
import WelcomeMessage from '../../components/WelcomeMessage'
import HeaderBar from '../../components/HeaderBar'
import Subtitle from '../../components/Subtitle'
import CategoriesList from '../../components/CategoriesList'
import TasksList from '../../components/TasksList'

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <WelcomeMessage name={"Paul"} />
      <Subtitle title={"Categories"} />
      <CategoriesList />
      <Subtitle title={"Today's Tasks"} />
      <TasksList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Home