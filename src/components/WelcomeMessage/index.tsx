import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export type Props = {
  name: string;
};

const WelcomeMessage: React.FC<Props> = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>What's up, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    padding: 30,
    justifyContent: 'flex-start',
  },
  welcomeMessage: {
    fontSize: 30,
    color: '#23305C',
    fontWeight: '700',
  },
});

export default WelcomeMessage;
