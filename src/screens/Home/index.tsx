import React from 'react';
import {View, StyleSheet} from 'react-native';
import WelcomeMessage from '@components/WelcomeMessage';
import HeaderBar from '@components/HeaderBar';
import Subtitle from '@components/Subtitle';
import CategoriesList from '@components/CategoriesList';
import TasksList from '@components/TasksList';

export interface IHome {
  style: any,
  navigation: any
}

const Home: React.FC<IHome> = ({ style }) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FAFBFE', ...style}}>
      <HeaderBar />
      <WelcomeMessage name={'Paul'} />
      <Subtitle title={'Categories'} />
      <CategoriesList />
      <Subtitle title={"Today's Tasks"} />
      <TasksList />
    </View>
  );
};

export default Home;
