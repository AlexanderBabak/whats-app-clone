export type RootStackParamList = {
  Main: undefined;
  ChatItem: undefined;
  // PaymentDetails: { paymentId: string };
};

export type RootTabParamList = {
  Chats: undefined;
  Groups: undefined;
  Calls: undefined;
  Settings: undefined;
};

export type RootParamList = RootStackParamList | RootTabParamList;
