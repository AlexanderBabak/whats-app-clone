import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../assets/constants';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  message: string;
  onSetMessage: (text: string) => void;
  onSendMessage: () => void;
}

export const ChatInput = ({ message, onSetMessage, onSendMessage }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Type a message...'
        value={message}
        onChangeText={(text) => onSetMessage(text)}
      />
      <TouchableOpacity onPress={onSendMessage} style={styles.button}>
        <Ionicons name='send' size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.white,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    borderColor: colors.borderColor,
  },
  button: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: colors.buttonColor,
    borderRadius: 29,
  },
});
