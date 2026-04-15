import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

const dataSlice = createSlice({
    name: 'allData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchData.fulfilled,
            (state, action) => {
                state.posts = action.payload;
            }
        );
    }
});

const fetchData 
    = createAsyncThunk('allData/fetchData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
});

export const dataReducer = dataSlice.reducer;