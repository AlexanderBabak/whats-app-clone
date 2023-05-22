import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';
import { ChatItem } from '../components/ChatItem';
import { CONTACTS } from '../mockData';
import { IChatData, IContact } from '../interfaces/chatItem';
import { ContactItem } from '../components/ContactItem';

type Props = NativeStackScreenProps<RootStackParamList, 'NewChat'>;

export const NewChatScreen: React.FC<Props> = ({ navigation }) => {
  // надо получить из редакса или локального хранилища все чаты
  const CONTACTSMES: any[] = []; // это болванка

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Create a new chat',
    });
  }, []);

  const handleCreateChat = ({ contactId, name, image }: IContact) => {
    // проверка есть ли он в списке
    const isChat = CONTACTSMES.some((contact) => contact.contactId === contactId);

    if (!isChat) {
      // создаем чат с новым собеседником, пушим данне в хранилище и в редакс
      const newChatData: IChatData = {
        userId: contactId,
        name,
        image,
        time: '13:30',
        unreadMsg: Math.floor(Math.random() * 3),
        messages: [],
      };
    }
    // вторым параметром передаем с кем мы общаемся
    navigation.navigate('ChatItem', { userId: contactId });
  };

  return (
    <ScrollView>
      <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
        {CONTACTS.map((contact) => (
          <ContactItem key={contact.contactId} data={contact} onCreateChat={handleCreateChat} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
