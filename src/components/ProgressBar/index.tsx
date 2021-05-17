import React from 'react';
import {View, StyleSheet} from 'react-native';

export type Props = {
  progress: number;
  color: string;
};

const ProgressBar: React.FC<Props> = ({progress, color}) => {
  return (
    <View style={styles.progress}>
      <View style={{backgroundColor: `${color}`, width: `${progress}%`}} />
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    borderRadius: 50,
    marginTop: 15,
    flexDirection: 'row',
    height: 3,
    width: 185,
    backgroundColor: '#EAEFFC',
  },
});

export default ProgressBar;
