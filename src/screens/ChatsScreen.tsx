import React from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';
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
    <View style={styles.container}>
      <ChatsScreenHeader title='Chats' />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={usersData}
        renderItem={renderItem}
        keyExtractor={(item: IChatItem) => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: colors.white,
    flex: 1,
  },
});
