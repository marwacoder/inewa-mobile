import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import News from './TabScreen';
import Profile from './Profile';
import AddNews from './AddNews';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,

  style: {
    height: 60,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 10,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? '#3b82f6' : '#CDCDD2';

          switch (route.name) {
            case 'news':
              return (
                <Ionicons
                size={25}
                  name="ios-newspaper"
                  style={{
                    color: tintColor,
                  }}
                />
              );
            case 'addNews':
              return (
                <MaterialIcons
                size={25}
                  name="note-add"
                  style={{
                    color: tintColor,
                  }}
                 
                />
              );
            case 'profile':
              return (
                <FontAwesome
                  name="user"
                  size={25}
                  style={{
                    color: tintColor,
                  }}
                  
                />
              );
          }
        },
      })}>
      <Tab.Screen name="news" component={News} />
      <Tab.Screen name="addNews" component={AddNews} />

      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
