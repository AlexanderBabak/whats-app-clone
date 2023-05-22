import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';
import { Ionicons } from '@expo/vector-icons';
import { colors, MAIN_USER } from '../assets/constants';
import { IMessage } from '../interfaces/chatItem';
import { ChatMessage } from '../components/ChatMessage';
import { ChatItemHeader } from '../components/ChatItemHeader';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addMessage } from '../redux/chatsSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatItem'>;

const renderItem: ListRenderItem<IMessage> = ({ item }) => <ChatMessage data={item} />;

export const ChatItemScreen: React.FC<Props> = ({ navigation, route }) => {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  const { userId, name, image } = route.params;

  const { users } = useAppSelector((state) => state.chats);
  const usersMessages = users.find((user) => user.userId === userId)?.messages;

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      dispatch(addMessage({ userId, text: message, author: MAIN_USER }));

      // имитация ответа
      setTimeout(() => {
        dispatch(addMessage({ userId, text: `${message} ♥️`, author: userId }));
      }, 2000);

      setMessage('');
    }
  };
  // @ts-ignore
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 48 : 0} // Может потребоваться настройка в зависимости от вашего макета
    >
      <View style={{ flex: 1 }}>
        <ChatItemHeader name={name} image={image} />

        <View
          style={{
            flex: 1,
            backgroundColor: colors.grey,
          }}
        >
          <FlatList
            // data={messages}
            data={usersMessages}
            renderItem={renderItem}
            inverted={true}
            keyExtractor={(item: IMessage) => String(item.id)}
            style={{ gap: 10, padding: 10, flex: 1 }}
            contentContainerStyle={{ gap: 10, paddingBottom: 20, flexDirection: 'column-reverse' }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingVertical: 8,
            backgroundColor: colors.white,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              height: 40,
              borderWidth: 1,
              borderRadius: 20,
              paddingHorizontal: 10,
              borderColor: colors.borderColor,
            }}
            placeholder='Type a message...'
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity
            onPress={handleSendMessage}
            style={{
              marginLeft: 8,
              padding: 8,
              backgroundColor: colors.buttonColor,
              borderRadius: 29,
            }}
          >
            <Ionicons name='send' size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});
