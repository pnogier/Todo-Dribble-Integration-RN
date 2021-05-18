import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

const HeaderBar: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Icon
            type="MaterialIcons"
            name="search"
            style={{color: '#8B97C9', fontSize: 40, marginRight: 15}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            type="MaterialIcons"
            name="notifications-none"
            style={{color: '#8B97C9', fontSize: 40}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 23,
    paddingRight: 30,
    paddingBottom: 10,
  },
  leftContainer: {
    flex: 7,
  },
  rightContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HeaderBar;
