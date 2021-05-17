import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon, Row} from 'native-base';

export type Props = {
  title: string;
  color: string;
};

const TaskCard: React.FC<Props> = ({title, color}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Icon
        type="MaterialIcons"
        name="panorama-fish-eye"
        style={{color: `${color}`, fontSize: 30}}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 8,
    height: 80,
    borderRadius: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: '#FAFBFE',
  },
  title: {
    paddingLeft: 20,
    fontSize: 20,
    color: '#333B4F',
  },
});

export default TaskCard;
