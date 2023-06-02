export type RootStackParamList = {
  Main: undefined;
  ChatItem: { userId: string };
  NewChat: undefined;
  NewGroup: undefined;
  GroupChatItem: { groupName: string };
};

export type RootTabParamList = {
  Chats: undefined;
  Groups: undefined;
  Calls: undefined;
  Settings: undefined;
};

export type RootParamList = RootStackParamList | RootTabParamList;
