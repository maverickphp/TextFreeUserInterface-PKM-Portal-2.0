const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('access_token')
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        removeToken(state, action){
            state.token = ''
        }
    },
});

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;