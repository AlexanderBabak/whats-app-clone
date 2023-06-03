import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IGroupChatData, IUser } from '../interfaces/chatItem';
import { getTime } from '../helpers/getTime';

interface Props {
  groups: IGroupChatData[];
}

interface PayloadMessage {
  groupName: string;
  text: string;
  author: any;
}

interface NewGroup {
  newUsers: IUser[];
  groupName: string;
}

const initialState: Props = {
  groups: [],
};

export const groupChatsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    getGroupData: (state, action: PayloadAction<IGroupChatData[]>) => {
      state.groups = action.payload;
    },
    addGroupMessage: (state, action: PayloadAction<PayloadMessage>) => {
      //find the group you are chatting with
      const groupObj = state.groups.find((group) => group.groupName === action.payload.groupName);

      // add a message
      groupObj?.messages.push({
        id: new Date().toISOString(),
        userId: action.payload.author,
        text: action.payload.text,
      });
    },

    createGroupChat: (state, action: PayloadAction<NewGroup>) => {
      state.groups.push({
        groupName: action.payload.groupName,
        time: getTime(),
        unreadMsg: 0,
        users: action.payload.newUsers,
        messages: [],
      });
    },
  },
});

export const { getGroupData, createGroupChat, addGroupMessage } = groupChatsSlice.actions;
export default groupChatsSlice.reducer;
