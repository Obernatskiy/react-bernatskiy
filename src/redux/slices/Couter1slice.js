import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";



const initialState = {
    count1: 0,
    users: []
};

const getUsers = createAsyncThunk(
    'count1Slice/getUsers',
    async () => {
         const users = await  fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json());
         return users;
    }
);

const count1Slice = createSlice({
    name: 'count1Slice',
    initialState,
    reducers: {
        inc:(state, action) => {
            ++state.count1
        },
        dec:(state, action) => {
            --state.count1
        },
        reset:(state, action) => {
            state.count1 = 0
        }
    },
    extraReducers: {
        [getUsers.fulfilled]:(state, action) => {
            state.users = action.payload;
        }
    }
});

const {reducer:count1Reducer, actions:{inc,dec,reset}} = count1Slice;

const count1Actions = {
    inc,
    dec,
    reset,
    getUsers
}

export {count1Actions,
    count1Reducer};