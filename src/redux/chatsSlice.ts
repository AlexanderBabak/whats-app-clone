import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ChatsState {
  value: number;
}

const initialState: ChatsState = {
  value: 3,
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = chatsSlice.actions;

export const selectCount = (state: RootState) => state.chats.value;

export default chatsSlice.reducer;
