import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screens/Home';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Home />
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
