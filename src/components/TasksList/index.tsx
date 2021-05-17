import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import TaskCard from '../TaskCard';

const tasks = [
  {
    id: 1,
    title: 'Daily meeting with team',
    done: false,
    category: 'business',
  },
  {
    id: 2,
    title: 'Pay the rent',
    done: true,
    category: 'personal',
  },
  {
    id: 3,
    title: 'Check emails',
    done: false,
    category: 'personal',
  },
  {
    id: 4,
    title: 'Lunch with Emma',
    done: false,
    category: 'business',
  },
  {
    id: 5,
    title: 'Meditation',
    done: false,
    category: 'personal',
  },
];

const TasksList: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            title={task.title}
            color={task.category === 'business' ? '#D22CED' : '#3071F0'}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    paddingTop: 30,
  },
});

export default TasksList;
