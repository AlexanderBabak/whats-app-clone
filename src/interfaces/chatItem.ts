export interface IMessage {
  id: number | string;
  userId: string | number;
  text: string;
}

export interface IUser {
  userId: string;
  name: string;
  image: string;
}

export interface IContact {
  contactId: string;
  name: string;
  image: string;
  isChecked?: boolean;
}

export interface IChatData {
  userId: string;
  name: string;
  image: string;
  time: string;
  unreadMsg: number;
  messages: IMessage[];
}

export interface IGroupChatData {
  groupName: string;
  time: string;
  unreadMsg: number;
  users: IUser[];
  messages: IMessage[];
}
