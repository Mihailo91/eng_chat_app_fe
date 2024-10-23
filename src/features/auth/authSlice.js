import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const login = createAsyncThunk('auth/login',
    async (user, thunkAPI) => {
        try {
             await authService.login(user)
             return 'Mihailo'
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
                state.isError = false,
                state.isSuccess = false,
                state.isLoading = false,
                state.message = ''
        }
    },

    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload
            })
    },
})

export const { reset } = authSlice.actions

export default authSlice.reducer