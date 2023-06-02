import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootTabParamList } from '../interfaces/navigation';
import { colors } from '../assets/constants';

interface Props {
  name: string | undefined;
  image?: string | undefined;
  routeName: 'Chats' | 'Groups';
  usersQty?: number;
}

export const ChatItemHeader = ({ name, image, routeName, usersQty }: Props) => {
  const navigation: NativeStackNavigationProp<RootTabParamList, 'Chats' | 'Groups'> =
    useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(routeName)}>
        <Ionicons name='chevron-back-outline' size={30} color={colors.textPrimary} />
      </TouchableOpacity>
      <View style={styles.userContainer}>
        {image && <Image style={styles.userImage} source={{ uri: image }} />}
        <Text style={styles.userText}>{name}</Text>
        {usersQty && (
          <Text style={[styles.userText, styles.usersQtyText]}>{`(${usersQty} users)`}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    backgroundColor: colors.white,
  },
  iconContainer: {
    position: 'absolute',
    left: 8,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  userImage: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 30,
  },
  userText: {
    fontSize: 18,
    fontWeight: '600',
  },
  usersQtyText: {
    fontWeight: '400',
  },
});
