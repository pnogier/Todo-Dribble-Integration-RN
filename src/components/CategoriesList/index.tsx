import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import CategoryCard from '../CategoryCard';

const categories = [
  {
    id: 1,
    title: 'Business',
    color: '#D22CED',
    count: 40,
    completed: 18,
  },
  {
    id: 2,
    title: 'Personal',
    color: '#3071F0',
    count: 18,
    completed: 10,
  },
];

const CategoriesList: React.FC = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      horizontal>
      {categories.map(item => (
        <CategoryCard
          key={item.id}
          title={item.title}
          color={item.color}
          taskCount={item.count}
          completed={item.completed}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 2,
    padding: 30,
  },
});

export default CategoriesList;
