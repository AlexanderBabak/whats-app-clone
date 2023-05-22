import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IChatData } from '../interfaces/chatItem';

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
      //найти объект у корогого userId = тому с кем ты переписываешься
      const userObj = state.users.find((user) => user.userId === action.payload.userId);

      // добавить ему сообщение
      userObj?.messages.push({
        id: new Date().toISOString(),
        userId: action.payload.author,
        text: action.payload.text,
      });
    },

    createChat: (state) => {},
  },
});

export const { getData, createChat, addMessage } = chatsSlice.actions;
export default chatsSlice.reducer;
