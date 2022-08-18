import { createSlice } from '@reduxjs/toolkit';

import * as localStorage from '../../services/localStorage';

const initialState = {
    user: localStorage.getUser()
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser(state, action) {
            localStorage.saveUser(action.payload);
            state.user = action.payload;
        },
        removeUser(state) {
            localStorage.removeUser();
            state.user = {}
        }
    }
});

export const { saveUser, removeUser } = userSlice.actions;
export default userSlice.reducer;