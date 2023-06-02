import React from 'react';
import { View, Text } from 'react-native';
import { IMessage } from '../interfaces/chatItem';
import { findUserById } from '../helpers/findUserById';
import { getName } from '../helpers/getName';
import { colors, MAIN_USER } from '../assets/constants';

interface Props {
  data: IMessage;
}

export const ChatGroupMessage = ({ data }: Props) => {
  const isUser = data.userId === MAIN_USER;
  const userName = findUserById(data.userId);

  return (
    <View
      style={{
        maxWidth: '80%',
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        padding: 12,
        borderRadius: 10,
        gap: 6,
        backgroundColor: isUser ? colors.userMsg : colors.white,
      }}
    >
      {userName && (
        <Text style={{ color: colors.textSecondary, fontWeight: '600' }}>{getName(userName)}</Text>
      )}
      <Text style={{ color: colors.textPrimary }}>{data.text}</Text>
    </View>
  );
};
