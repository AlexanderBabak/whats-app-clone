import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';
import { IChatData } from '../interfaces/chatItem';
import { colors } from '../assets/constants';
import { ChatItem } from '../components/ChatItem';
import { CHATSDATA } from '../mockData';
import { ChatsScreenHeader } from '../components/ChatsScreenHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NewChatButton } from '../components/NewChatButton';
import { useAppSelector } from '../redux/hooks';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ChatItem'>;
};
const renderItem: ListRenderItem<IChatData> = ({ item }) => <ChatItem data={item} />;

export const ChatsScreen: React.FC<Props> = ({ navigation }) => {
  const [data, setData] = useState<IChatData[]>();

  useEffect(() => {
    const storeData = async () => {
      try {
        let dataFromStorage = await AsyncStorage.getItem('chatData');
        if (!dataFromStorage) {
          await AsyncStorage.setItem('chatData', JSON.stringify({ users: CHATSDATA }));
        }
        dataFromStorage = await AsyncStorage.getItem('chatData');

        setData(dataFromStorage ? JSON.parse(dataFromStorage)?.users : null);
      } catch (e) {
        console.log('Error!!!');
      }
    };

    storeData();
  }, []);

  const { value } = useAppSelector((state) => state.chats);

  console.log(value, 'redux');

  // переписать на редакс вместо state

  return (
    <View style={styles.container}>
      <ChatsScreenHeader title='Chats' />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: IChatData) => item.userId}
      />

      <NewChatButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: colors.white,
    flex: 1,
    position: 'relative',
  },
});
