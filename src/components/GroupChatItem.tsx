import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IGroupChatData } from '../interfaces/chatItem';
import { RootStackParamList } from '../interfaces/navigation';
import { colors } from '../assets/constants';

interface Props {
  data: IGroupChatData;
}

export const GroupChatItem = ({ data }: Props) => {
  const navigation: NativeStackNavigationProp<RootStackParamList, 'GroupChatItem'> =
    useNavigation();

  const lastElement = data.messages.length - 1;

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() =>
        navigation.navigate('GroupChatItem', {
          groupName: data.groupName,
        })
      }
    >
      <View style={styles.userContainer}>
        <View style={styles.avatarsContainer}>
          <Image source={{ uri: data.users[0].image }} style={styles.avatar} />
          <Image
            source={{ uri: data.users[1].image }}
            style={[styles.avatar, styles.secondAvatar]}
          />
        </View>

        <View style={{ gap: 4 }}>
          <Text style={styles.userName}>{data.groupName}</Text>
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
  avatarsContainer: {
    position: 'relative',
    width: 60,
    aspectRatio: 1,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 60,
  },
  secondAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 1,
    borderColor: colors.white,
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
