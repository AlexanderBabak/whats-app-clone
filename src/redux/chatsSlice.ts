import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IChatData, IContact } from '../interfaces/chatItem';
import { getTime } from '../helpers/getTime';

interface Props {
  users: IChatData[];
}

interface PayloadMessage {
  userId: string;
  text: string;
  author: string;
}

const initialState: Props = {
  users: [],
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<IChatData[]>) => {
      state.users = action.payload;
    },
    addMessage: (state, action: PayloadAction<PayloadMessage>) => {
      //find the user you are chatting with
      const userObj = state.users.find((user) => user.userId === action.payload.userId);

      // add a message
      userObj?.messages.push({
        id: new Date().toISOString(),
        userId: action.payload.author,
        text: action.payload.text,
      });
    },

    createChat: (state, action: PayloadAction<IContact>) => {
      state.users.push({
        userId: action.payload.contactId,
        name: action.payload.name,
        image: action.payload.image,
        time: getTime(),
        unreadMsg: 0,
        messages: [],
      });
    },
  },
});

export const { getData, createChat, addMessage } = chatsSlice.actions;
export default chatsSlice.reducer;
