import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../assets/constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';

export const NewChatButton = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList, 'NewChat'> = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('NewChat')} style={styles.container}>
      <Ionicons name='add' size={30} color={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    width: 50,
    aspectRatio: 1,
    backgroundColor: colors.buttonColor,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
});
