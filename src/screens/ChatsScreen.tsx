import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';
import { IChatItem } from '../interfaces/chatItem';
import { colors } from '../assets/constants';
import { ChatItem } from '../components/ChatItem';
import { usersData } from '../mockData';
import { ChatsScreenHeader } from '../components/ChatsScreenHeader';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ChatItem'>;
};
const renderItem: ListRenderItem<IChatItem> = ({ item }) => <ChatItem data={item} />;

export const ChatsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 18, backgroundColor: colors.white, flex: 1 }}>
      <ChatsScreenHeader title='Chats' />
      <FlatList showsVerticalScrollIndicator={false} data={usersData} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({});
