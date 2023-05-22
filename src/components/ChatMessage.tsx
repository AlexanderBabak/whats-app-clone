import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../assets/constants';
import { IMessage } from '../interfaces/chatItem';

export const ChatMessage = ({ data }: { data: IMessage }) => {
  const isUser = data.userId === '1234';

  return (
    <View
      style={{
        maxWidth: '80%',
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        backgroundColor: isUser ? colors.userMsg : colors.white,
      }}
    >
      <Text style={{ color: colors.textPrimary }}>{data.text}</Text>
    </View>
  );
};
