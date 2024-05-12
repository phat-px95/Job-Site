import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export interface LogInInfo {
	logInUser: string
}
const initialState: LogInInfo = {
  logInUser: 'Phat',
};

const logInUserSlice = createSlice({
	name: 'logInUser',
	initialState,
	reducers: {
		getlogInUserName(state) {
			state.logInUser.toString();
		}
	}
});

export const {getlogInUserName} = logInUserSlice.actions;
export default logInUserSlice.reducer;