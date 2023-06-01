import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addMessage } from '../redux/chatsSlice';
import { RootStackParamList } from '../interfaces/navigation';
import { IMessage } from '../interfaces/chatItem';
import { ChatMessage } from '../components/ChatMessage';
import { ChatItemHeader } from '../components/ChatItemHeader';
import { ChatInput } from '../components/ChatInput';
import { colors, MAIN_USER } from '../assets/constants';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatItem'>;

const renderItem: ListRenderItem<IMessage> = ({ item }) => <ChatMessage data={item} />;

export const ChatItemScreen: React.FC<Props> = ({ route }) => {
  const [message, setMessage] = useState('');
  const { users } = useAppSelector((state) => state.chats);
  const dispatch = useAppDispatch();

  const { userId } = route.params;
  const user = users.find((user) => user.userId === userId);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      dispatch(addMessage({ userId, text: message, author: MAIN_USER }));

      // simulated chat response
      setTimeout(() => {
        dispatch(addMessage({ userId, text: `${message} ♥️`, author: userId }));
      }, 2000);

      setMessage('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 48 : 0}
    >
      <View style={{ flex: 1 }}>
        <ChatItemHeader name={user?.name} image={user?.image} />

        <View style={styles.listContainer}>
          <FlatList
            data={user?.messages}
            renderItem={renderItem}
            inverted={true}
            keyExtractor={(item: IMessage) => String(item.id)}
            style={styles.list}
            contentContainerStyle={styles.listContent}
          />
        </View>

        <ChatInput message={message} onSendMessage={handleSendMessage} onSetMessage={setMessage} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  list: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
  listContent: {
    flexDirection: 'column-reverse',
    gap: 10,
    paddingBottom: 20,
  },
});
