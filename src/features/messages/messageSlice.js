import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import messageService from './messageService'
import { connect, sendMsg } from '../../socket/socket'

const msgs = [
    {
        id: 1,
        user: 'John Doe',
        content: 'This program changed my life! I learned so much and met amazing people.',
        country: 'Sweden',
    },
    {
        id: 2,
        user: 'Jane Smith',
        content: 'Incredible experience! The instructors were top-notch and very supportive.',
        country: 'Canada',
    },
    {
        id: 3,
        user: 'Emily Johnson',
        content: 'I highly recommend this course. It provided me with the skills I needed to succeed.',
        country: 'Germany',
    },
    {
        id: 1,
        user: 'John Doe',
        content: 'This program changed my life! I learned so much and met amazing people.',
        country: 'Sweden',
    },
    {
        id: 2,
        user: 'Jane Smith',
        content: 'Incredible experience! The instructors were top-notch and very supportive.',
        country: 'Canada',
    },
    {
        id: 3,
        user: 'Emily Johnson',
        content: 'I highly recommend this course. It provided me with the skills I needed to succeed.',
        country: 'Germany',
    },
    {
        id: 1,
        user: 'John Doe',
        content: 'This program changed my life! I learned so much and met amazing people.',
        country: 'Sweden',
    },
    {
        id: 2,
        user: 'Jane Smith',
        content: 'Incredible experience! The instructors were top-notch and very supportive.',
        country: 'Canada',
    },
    {
        id: 3,
        user: 'Emily Johnson',
        content: 'I highly recommend this course. It provided me with the skills I needed to succeed.',
        country: 'Germany',
    },
    {
        id: 1,
        user: 'John Doe',
        content: 'This program changed my life! I learned so much and met amazing people.',
        country: 'Sweden',
    },
    {
        id: 2,
        user: 'Jane Smith',
        content: 'Incredible experience! The instructors were top-notch and very supportive.',
        country: 'Canada',
    },
    {
        id: 3,
        user: 'Emily Johnson',
        content: 'I highly recommend this course. It provided me with the skills I needed to succeed.',
        country: 'Germany',
    },
    {
        id: 1,
        user: 'John Doe',
        content: 'This program changed my life! I learned so much and met amazing people.',
        country: 'Sweden',
    },
    {
        id: 2,
        user: 'Jane Smith',
        content: 'Incredible experience! The instructors were top-notch and very supportive.',
        country: 'Canada',
    },
    {
        id: 3,
        user: 'Emily Johnson',
        content: 'I highly recommend this course. It provided me with the skills I needed to succeed.',
        country: 'Germany',
    }
]

const initialState = {
    messages: msgs,
    message: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: ''
}

export const sendMessage = createAsyncThunk('message/send',
    async (message, thunkAPI) => {
        try {
            // const username = thunkAPI.getState().auth.user.user
            // const chatroom = thunkAPI.getState().auth.user.chatroom

            // const messageData = {
            //     user: username,
            //     chatroom: chatroom,
            //     message: message,
            // }
            // console.log(messageData)
            connect()
            sendMsg('Hello from React')
            const response = await messageService.sendMessage(message)
            if (response.status === 200) {
                return message.message
            }
            return ''
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || error.toString()
            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false,
                state.isSuccess = false,
                state.isLoading = false,
                state.errorMessage = ''
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
                state.messages = [...state.messages, action.payload]
                console.log(action.payload)
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.errorMessage = action.payload
            })
    },
})

export const { reset } = messageSlice.actions

export default messageSlice.reducer