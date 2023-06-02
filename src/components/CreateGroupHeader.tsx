import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../assets/constants';

interface Props {
  isActiveNextBtn: boolean;
  setModalVisible: (isVisible: boolean) => void;
}

export const CreateGroupHeader = ({ setModalVisible, isActiveNextBtn }: Props) => {
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)} disabled={!isActiveNextBtn}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: isActiveNextBtn ? colors.buttonColor : colors.textSecondary,
        }}
      >
        Next
      </Text>
    </TouchableOpacity>
  );
};
