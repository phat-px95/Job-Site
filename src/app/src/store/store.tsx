import { configureStore } from '@reduxjs/toolkit';
import logInUserReducer from '../reducers/index';

const store = configureStore({
  reducer: {
    logInUserInfo: logInUserReducer
  }, 
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;