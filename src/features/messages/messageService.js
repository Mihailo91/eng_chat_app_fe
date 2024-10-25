import axios from 'axios'

const API_URL = 'http://localhost:8090/chatroom'
//Send message
const sendMessage = async (messageData) => {
    const response = await axios.post(API_URL + '/message', messageData)
    console.log(response.status)
    console.log(response.data)
    return response.status
}

const messageService = {
    sendMessage,
}

export default messageService