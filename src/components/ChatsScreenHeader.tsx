import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../assets/constants';

interface Props {
  title: string;
}

export const ChatsScreenHeader = ({ title }: Props) => {
  return (
    <>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../assets/images/whatsapp-logo.png')} />
        <TouchableOpacity>
          <Ionicons name='search' color={colors.textSecondary} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 50,
  },
  containerTitle: {
    marginVertical: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});
