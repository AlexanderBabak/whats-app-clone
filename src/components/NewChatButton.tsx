import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../assets/constants';
import { RootStackParamList } from '../interfaces/navigation';

interface Props {
  routeName: 'NewChat' | 'NewGroup';
}

export const NewChatButton = ({ routeName }: Props) => {
  const navigation: NativeStackNavigationProp<RootStackParamList, 'NewChat' | 'NewGroup'> =
    useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)} style={styles.container}>
      <Ionicons name='add' size={30} color={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    opacity: 0.9,
    backgroundColor: colors.buttonColor,
  },
});
