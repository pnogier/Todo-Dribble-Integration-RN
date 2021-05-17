import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export type Props = {
  title: string;
};

const Subtitle: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{title.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 30,
  },
  subtitle: {
    fontSize: 14,
    color: '#9BA2BC',
    fontWeight: 'bold',
  },
});

export default Subtitle;
