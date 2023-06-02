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
import { addGroupMessage } from '../redux/groupChatsSlice';
import { RootStackParamList } from '../interfaces/navigation';
import { IMessage } from '../interfaces/chatItem';
import { ChatItemHeader } from '../components/ChatItemHeader';
import { ChatInput } from '../components/ChatInput';
import { ChatGroupMessage } from '../components/ChatGroupMessage';
import { colors, MAIN_USER } from '../assets/constants';

type Props = NativeStackScreenProps<RootStackParamList, 'GroupChatItem'>;

const renderItem: ListRenderItem<IMessage> = ({ item }) => <ChatGroupMessage data={item} />;

export const GroupChatItemScreen: React.FC<Props> = ({ route }) => {
  const [message, setMessage] = useState('');
  const { groups } = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  const { groupName } = route.params;

  const group = groups.find((group) => group.groupName === groupName);

  const usersQty = group?.users?.length ?? 0;

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      dispatch(addGroupMessage({ groupName, text: message, author: MAIN_USER }));

      // simulated chat response
      for (let i = 0; i < usersQty; i++) {
        setTimeout(() => {
          dispatch(
            addGroupMessage({
              groupName,
              text: `${message} ♥️`,
              author: group?.users[i].userId,
            }),
          );
        }, 2000 + Number(`${i}000`));
      }

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
        <ChatItemHeader name={group?.groupName} routeName='Groups' usersQty={usersQty + 1} />

        <View style={styles.listContainer}>
          <FlatList
            data={group?.messages}
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
