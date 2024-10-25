import { useEffect, useState } from "react"
import { FaPeopleGroup } from "react-icons/fa6"
import coverImage from '../assets/chat_picture.png'
import { useSelector, useDispatch } from 'react-redux'
import { sendMessage, reset } from '../features/messages/messageSlice'
import { toast } from "react-toastify"

const Chat = () => {
    const [chatMessage, setChatMessage] = useState('')

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const storedUser = user

    const { message, messages, isLoading, isError, isSuccess, errorMessage } = useSelector(state => state.message)

    useEffect(() => {
        if (isError) {
            toast.error(errorMessage)
        }

        if (isSuccess) {
            dispatch(reset())
        }
        dispatch(reset())
    }, [isSuccess, isError, errorMessage, dispatch])

    const createMessage = () => {
        const userData = {
            user: storedUser.user,
            chatroom: storedUser.chatroom,
            message: chatMessage,
        }
        dispatch(sendMessage(userData))
        setChatMessage('')
    }

    return (
        <div className='bg-violet-900' style={{ backgroundImage: `url(${coverImage})` }}>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col mx-20 h-screen bg-gray-200 rounded-xl'>
                    <div className='flex flex-row font-bold text-3xl text-blue-900 bg-gray-300 rounded-xl py-10 '>
                        <h1 className='text-5xl pl-4' ><FaPeopleGroup /></h1>
                        <h2 className='pl-4 '>Chat {storedUser.chatroom} </h2>
                    </div>
                    <div className='overflow-auto rounded-xl'>
                        {messages.map((msg, index) => (
                            <div key={index} className='m-8'>
                                {msg.user && msg.user === storedUser.user ?
                                    <div className='flex flex-row justify-end'>
                                        <p className='text-right font-semibold rounded-xl p-2 bg-blue-200'>{msg.content}</p>
                                    </div>
                                    :
                                    <div className='flex flex-row justify-start'>
                                        <p className='text-left font-semibold rounded-xl p-2 bg-gray-100'><strong>{msg.user}:</strong> {msg.content}</p>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-row h-12xs pb-10 px-10'>
                        <input
                            id='chatMessage'
                            type='text'
                            name='chatMessage'
                            value={chatMessage}
                            className='w-full py-2 px-2 bg-gray-100 rounded-md text-black'
                            placeholder='Enter your message here'
                            onChange={(e) => setChatMessage(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') createMessage() }}
                            required
                        />
                        <button
                            onClick={createMessage}
                            className='bg-gray-300 px-8 py-2 ml-3 text-black hover:bg-gray-400 font-bold rounded-xl'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat