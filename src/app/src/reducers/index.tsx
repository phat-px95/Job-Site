import { createSlice } from '@reduxjs/toolkit';

export interface ILogInInfo {
	logInUser: string
}

const initialState: ILogInInfo = {
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