import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { CheckBox } from './UI/CheckBox';
import { IContact } from '../interfaces/chatItem';
import { colors } from '../assets/constants';

interface Props {
  data: IContact;
  onCreateChat?: ({ contactId, name, image }: IContact) => void;
  isChecked?: boolean;
  setChecked?: (contactId: string) => void;
}

export const ContactItem = ({ data, onCreateChat, isChecked, setChecked }: Props) => {
  const { contactId, name, image } = data;

  const handlePress = () => {
    onCreateChat && onCreateChat({ contactId, name, image, isChecked: false });
  };

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={setChecked ? () => setChecked(contactId) : handlePress}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <Image source={{ uri: data.image }} style={styles.avatar} />
        <Text style={styles.userName}>{data.name}</Text>
      </View>

      {setChecked && <CheckBox onChange={() => setChecked(contactId)} checked={!!isChecked} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 0.2,
    borderBottomColor: 'rgba(0,0,0, 0.3)',
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
  },
});
