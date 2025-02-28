import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT, 1); // remove one old message when one new message gets added
            state.messages.push(action.payload);
        },
    },
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;