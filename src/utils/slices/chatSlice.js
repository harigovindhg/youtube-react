import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatList: []
    },
    reducers: {
        pushToChatList: (state, action) => {
            state.chatList.splice(OFFSET_LIVE_CHAT, 1);
            state.chatList.unshift(action.payload);
        }
    }
})

export const { pushToChatList } = chatSlice.actions;

export default chatSlice.reducer;