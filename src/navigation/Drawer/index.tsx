import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Icon} from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import Home from '../../screens/Home';

const DrawerNavigator = createDrawerNavigator();
const StackNavigator = createStackNavigator();

export interface IScreens {
  navigation: any;
  style: any;
}

const Screens: React.FC<IScreens> = ({navigation, style}) => {
  return (
    <Animated.View style={{...styles.stack}}>
      <StackNavigator.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                type="MaterialIcons"
                name="drag-handle"
                style={{color: '#8B97C9', fontSize: 50}}
              />
            </TouchableOpacity>
          ),
        }}>
        <StackNavigator.Screen name="Home">
          {props => <Home {...props} />}
        </StackNavigator.Screen>
      </StackNavigator.Navigator>
    </Animated.View>
  );
};

const DrawerContent: React.FC = props => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1}}>
      <View>
        <View>
          <Image
            source={{
              uri: 'https://www.facebook.com/photo?fbid=3407508212620272&set=a.144975715540221',
            }}
            //resizeMode="center"
            style={{height: 80, width: 80, ...styles.avatar}}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => props.navigation.closeDrawer()}>
            <Icon
              type="MaterialIcons"
              name="chevron-left"
              style={{color: '#F8FBFF', fontSize: 40}}
            />
          </TouchableOpacity>
          <View style={{ paddingLeft: 22, paddingBottom: 20}}>
            <Text style={styles.name}>Paul</Text>
            <Text style={styles.name}>Nogier</Text>
          </View>
        </View>
        <View>
          <DrawerItem
            label="Templates"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => (
              <Icon
                type="MaterialIcons"
                name="bookmark-border"
                style={{color: '#6776A1', fontSize: 30}}
              />
            )}
          />
          <DrawerItem
            label="Messages"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Messages')}
            icon={() => (
              <Icon
                type="MaterialIcons"
                name="grid-view"
                style={{color: '#6776A1', fontSize: 30}}
              />
            )}
          />
          <DrawerItem
            label="Analytics"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Contact')}
            icon={() => (
              <Icon
                type="MaterialIcons"
                name="analytics"
                style={{color: '#6776A1', fontSize: 30}}
              />
            )}
          />
          <DrawerItem
            label="Settings"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Contact')}
            icon={() => (
              <Icon
                type="MaterialIcons"
                name="settings"
                style={{color: '#6776A1', fontSize: 30}}
              />
            )}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer: React.FC = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <DrawerNavigator.Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyles}
      contentContainerStyle={{flex: 1}}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      drawerContent={props => {
        setProgress(props.progress);
        return <DrawerContent {...props} />;
      }}>
      <DrawerNavigator.Screen name="Screens">
        {props => <Screens {...props} style={animatedStyle} />}
      </DrawerNavigator.Screen>
    </DrawerNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
  name: {
    fontSize: 35,
    color: '#FFF',
    fontWeight: 'bold'
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: '#11225B'},
  drawerItem: {alignItems: 'flex-start', marginVertical: 0},
  drawerLabel: {color: '#E0E0E5', marginLeft: -16, width: 300, fontSize: 20},
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: '#F8FBFF',
    borderWidth: 2,
  },
  closeButton: {
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#F8FBFF',
    width: 43,
  },
});

export default Drawer;
