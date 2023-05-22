import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../assets/constants';
import { IMessage } from '../interfaces/chatItem';

interface Props {
  data: IMessage;
}

export const ChatMessage = ({ data }: Props) => {
  const isUser = data.userId === 'babak';

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
