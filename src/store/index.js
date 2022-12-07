import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import serviceReducer from './serviceSlice';
// import productReducer from './productSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        service: serviceReducer,
        // product: productReducer,
    },
});

export default store;