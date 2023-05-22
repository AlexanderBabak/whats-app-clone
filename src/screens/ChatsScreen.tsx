import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ChatItem'>;
};

export const ChatsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <Text>ChatsScreen</Text>
      <Button title={'go'} onPress={() => navigation.navigate('ChatItem')} />
    </>
  );
};

const styles = StyleSheet.create({});
