const { createSlice } = require('@reduxjs/toolkit');

const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        service: ''
    },
    reducers: {
        setService(state, action) {
            state.service = action.payload;
        }
    },
});

export const { setService } = serviceSlice.actions;
export default serviceSlice.reducer;