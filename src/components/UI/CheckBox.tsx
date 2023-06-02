import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../assets/constants';

interface Props {
  onChange: () => void;
  checked: boolean;
}

export const CheckBox = ({ onChange, checked }: Props) => {
  return (
    <Pressable style={[styles.checkboxBase, checked && styles.checkboxChecked]} onPress={onChange}>
      {checked && <Ionicons name='checkmark' size={16} color='white' />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.borderColor,
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
  },
});
