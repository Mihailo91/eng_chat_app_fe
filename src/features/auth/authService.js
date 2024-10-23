import axios from 'axios'

const API_URL = 'http://localhost:8090/chatroom'


//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + '/join', userData)
    if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(userData))  
    }
}

const authService = {
    login,
}

export default authService