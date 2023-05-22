import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../assets/constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootTabParamList } from '../interfaces/navigation';

interface Props {
  name: string | undefined;
  image: string | undefined;
}

export const ChatItemHeader = ({ name, image }: Props) => {
  const navigation: NativeStackNavigationProp<RootTabParamList, 'Chats'> = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Chats')}>
        <Ionicons name='chevron-back-outline' size={30} color={colors.textPrimary} />
      </TouchableOpacity>
      <View style={styles.userContainer}>
        <Image style={styles.userImage} source={{ uri: image }} />
        <Text style={styles.userText}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 6,
    justifyContent: 'center',
    position: 'relative',
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
    fontWeight: '500',
  },
});
