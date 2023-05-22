import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { CallsScreen } from '../screens/CallsScreen';
import { GroupsScreen } from '../screens/GroupsScreen';
import { ChatsScreen } from '../screens/ChatsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 15,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name='Chats'
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='chatbubbles-outline' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Groups'
        component={GroupsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='people-outline' size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name='Calls'
        component={CallsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='call-outline' size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='settings-outline' size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
