import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const GroupsScreen = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>GroupsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
