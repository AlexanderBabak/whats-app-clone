import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../assets/constants';
import { IMessage } from '../interfaces/chatItem';
import { ChatMessage } from '../components/ChatMessage';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatItem'>;

const user = {
  id: 1,
  name: 'Alexander Babak',
  image: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
  time: '12:30',
  unreadMsg: 2,
  textMSG:
    'Take the effort out of responding with suggested text and emoji replies, and check off little to-dos, like adding an event to your calendar or confirming the weather, without ever leaving the conversation.',
  messages: [
    { id: 12, userId: '1234', text: 'Hello' },
    { id: 13, userId: '2222', text: 'With suggested text and emoji replies' },
    {
      id: 14,
      userId: '1234',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    { id: 15, userId: '2222', text: 'Good' },
    { id: 17, userId: '2222', text: 'Good!!!' },
    {
      id: 19,
      userId: '2222',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 20,
      userId: '2222',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 21,
      userId: '1234',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 22,
      userId: '2222',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 23,
      userId: '1234',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 25,
      userId: '2222',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 26,
      userId: '1234',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 27,
      userId: '2222',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 28,
      userId: '1234',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 29,
      userId: '2222',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
    {
      id: 30,
      userId: '2222',
      text: 'Life is full of challenges, but with determination and perseverance, we can overcome any obstacle that comes our way. Stay strong and never give up.',
    },
  ],
};

const renderItem: ListRenderItem<IMessage> = ({ item }) => <ChatMessage data={item} />;

export const ChatItemScreen: React.FC<Props> = ({ navigation, route }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // onSendMessage(message);
      setMessage('');
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 48 : 0} // Может потребоваться настройка в зависимости от вашего макета
    >
      {/*<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>*/}
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colors.white,
            alignItems: 'center',
            paddingVertical: 6,
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <TouchableOpacity
            style={{ position: 'absolute', left: 8 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name='chevron-back-outline' size={30} color={colors.textPrimary} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Image
              style={{ width: 30, aspectRatio: 1, borderRadius: 30 }}
              source={{ uri: user.image }}
            />
            <Text style={{ fontSize: 18, fontWeight: '500' }}>{user.name}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.grey,
          }}
        >
          <FlatList
            data={user.messages}
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
      {/*</TouchableWithoutFeedback>*/}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});
