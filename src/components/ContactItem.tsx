import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { IContact } from '../interfaces/chatItem';
import { colors } from '../assets/constants';

interface Props {
  data: IContact;
  onCreateChat: ({ contactId, name, image }: IContact) => void;
}

export const ContactItem = ({ data, onCreateChat }: Props) => {
  const handlePress = () => {
    onCreateChat({ contactId: data.contactId, name: data.name, image: data.image });
  };

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={handlePress}>
      <Image source={{ uri: data.image }} style={styles.avatar} />
      <Text style={styles.userName}>{data.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 0.2,
    borderBottomColor: 'rgba(0,0,0, 0.3)',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
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
