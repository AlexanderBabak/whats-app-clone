import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../assets/constants';
import { IChatData } from '../interfaces/chatItem';
import { RootStackParamList } from '../interfaces/navigation';

interface Props {
  data: IChatData;
}

export const ChatItem = ({ data }: Props) => {
  const navigation: NativeStackNavigationProp<RootStackParamList, 'ChatItem'> = useNavigation();

  const lastElement = data.messages.length - 1;

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() =>
        navigation.navigate('ChatItem', {
          userId: data.userId,
        })
      }
    >
      <View style={styles.userContainer}>
        <Image source={{ uri: data.image }} style={styles.avatar} />
        <View style={{ gap: 4 }}>
          <Text style={styles.userName}>{data.name}</Text>
          <Text style={styles.userMessage} numberOfLines={2}>
            {data.messages[lastElement]?.text}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.date}>{data.time}</Text>
        {data.unreadMsg ? (
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{data.unreadMsg}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 12,
    borderBottomWidth: 0.2,
    borderBottomColor: 'rgba(0,0,0, 0.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
    gap: 16,
    width: '65%',
  },
  avatar: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 60,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  userMessage: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  infoContainer: {
    alignItems: 'center',
    gap: 8,
  },
  date: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  labelContainer: {
    minWidth: 30,
    padding: 6,
    backgroundColor: colors.primary,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.white,
    fontWeight: '600',
  },
});
