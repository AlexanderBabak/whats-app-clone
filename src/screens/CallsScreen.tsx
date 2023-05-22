import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CallsScreen = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>CallsScreen</Text>
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
