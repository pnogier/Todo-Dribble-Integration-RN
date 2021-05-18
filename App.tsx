import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './src/navigation/Drawer';
import Home from './src/screens/Home'


const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FAFBFE',
  },
});

export default App;
