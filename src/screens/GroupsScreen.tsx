import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ChatsScreenHeader } from '../components/ChatsScreenHeader';
import { colors } from '../assets/constants';

export const GroupsScreen = () => {
  return (
    <View style={styles.textContainer}>
      <ChatsScreenHeader title='Groups' />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 18,
  },
  text: {
    fontSize: 24,
  },
});
