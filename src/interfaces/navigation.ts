import { IMessage } from './chatItem';

export type RootStackParamList = {
  Main: undefined;
  ChatItem: { userId: string; messages?: IMessage[]; name?: string; image?: string };
  NewChat: undefined;
};

export type RootTabParamList = {
  Chats: undefined;
  Groups: undefined;
  Calls: undefined;
  Settings: undefined;
};

export type RootParamList = RootStackParamList | RootTabParamList;
