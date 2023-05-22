import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GroupsScreen } from './GroupsScreen';
import { SettingsScreen } from './SettingsScreen';
import { CallsScreen } from './CallsScreen';
import { ChatsScreen } from './ChatsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name='Chats'
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='chatbubbles-outline' size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Groups'
        component={GroupsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='people-outline' size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name='Calls'
        component={CallsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='call-outline' size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='settings-outline' size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
