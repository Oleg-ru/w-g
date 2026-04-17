import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

const dataSlice = createSlice({
    name: 'allData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchData.fulfilled,
            (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.posts = action.payload;
            }
        ).addCase(
            fetchData.pending,
            (state, action) => {
                state.posts = action.payload;
                state.error = null;
                state.isLoading = true;
            }
        ).addCase(
            fetchData.rejected,
            (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            }
        )
    }
});

export const fetchData
    = createAsyncThunk('allData/fetchData', async (url, {signal}) => {
    const response = await fetch(url, {signal});
    return await response.json();
});

export const dataReducer = dataSlice.reducer;