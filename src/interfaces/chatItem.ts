export interface IChatItem {
  id: number;
  name: string;
  image: string;
  time: string;
  unreadMsg: number;
  textMSG: string;
}

export interface IMessage {
  id: number;
  userId: string | number;
  text: string;
}
