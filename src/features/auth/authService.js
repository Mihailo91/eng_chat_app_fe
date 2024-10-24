import axios from 'axios'

const API_URL = 'http://localhost:8090/chatroom'


//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + '/join', userData)
    if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(userData))  
    }
}

//Send message
const sendMessage = async (userData) => {
    const response = await axios.post(API_URL + '/join/message', userData)
    return response.status
}

const authService = {
    login,
    sendMessage,
}

export default authService