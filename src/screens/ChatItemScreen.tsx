import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ListRenderItem,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../interfaces/navigation";
import { colors, MAIN_USER } from "../assets/constants";
import { IMessage } from "../interfaces/chatItem";
import { ChatMessage } from "../components/ChatMessage";
import { ChatItemHeader } from "../components/ChatItemHeader";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addMessage } from "../redux/chatsSlice";
import { ChatInput } from "../components/ChatInput";

type Props = NativeStackScreenProps<RootStackParamList, "ChatItem">;

const renderItem: ListRenderItem<IMessage> = ({ item }) => (
  <ChatMessage data={item} />
);

export const ChatItemScreen: React.FC<Props> = ({ route }) => {
  const [message, setMessage] = useState("");
  const { users } = useAppSelector((state) => state.chats);
  const dispatch = useAppDispatch();

  const { userId } = route.params;
  const user = users.find((user) => user.userId === userId);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      dispatch(addMessage({ userId, text: message, author: MAIN_USER }));

      // simulated chat response
      setTimeout(() => {
        dispatch(addMessage({ userId, text: `${message} ♥️`, author: userId }));
      }, 2000);

      setMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 48 : 0} // Может потребоваться настройка в зависимости от вашего макета
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

        <ChatInput
          message={message}
          onSendMessage={handleSendMessage}
          onSetMessage={setMessage}
        />
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
    flexDirection: "column-reverse",
    gap: 10,
    paddingBottom: 20,
  },
});
