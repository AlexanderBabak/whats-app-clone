import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';
import { ChatItem } from '../components/ChatItem';
import { CONTACTS } from '../mockData';
import { IContact } from '../interfaces/chatItem';
import { ContactItem } from '../components/ContactItem';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { createChat } from '../redux/chatsSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'NewChat'>;

export const NewChatScreen: React.FC<Props> = ({ navigation }) => {
  const { users } = useAppSelector((state) => state.chats);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Create a new chat',
    });
  }, []);

  const handleCreateChat = ({ contactId, name, image }: IContact) => {
    // check if a chat with this user has already been created
    const isChat = users.some((contact) => contact.userId === contactId);

    if (!isChat) {
      // create a chat with a new user
      dispatch(createChat({ name, image, contactId }));
    }
    //go to the chat with the specified user
    navigation.navigate('ChatItem', { userId: contactId });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {CONTACTS.map((contact) => (
          <ContactItem key={contact.contactId} data={contact} onCreateChat={handleCreateChat} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
