import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatItem'>;

export const ChatItemScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <Text>ChatItemScreen</Text>
      <Button title={'goBack'} onPress={() => navigation.goBack()} />
    </>
  );
};

const styles = StyleSheet.create({});
