export interface IMessage {
  id: number;
  userId: string | number;
  text: string;
}

export interface IContact {
  contactId: string;
  name: string;
  image: string;
}

export interface IChatData {
  userId: string;
  name: string;
  image: string;
  time: string;
  unreadMsg: number;
  messages: IMessage[];
}
