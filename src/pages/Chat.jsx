import { useEffect, useState } from "react"
import { FaPeopleGroup } from "react-icons/fa6"
import coverImage from '../assets/chat_picture.png'

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

    const chatroom = 'viber'
    const user = 'John Doe'

const Chat = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])


    useEffect(() => {
        setMessages(msgs)
    }, [])

    const sendMessage = () => {
        setMessage('')
    }

    return (
        <div className='bg-violet-900'  style={{ backgroundImage: `url(${coverImage})` }}>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col mx-20 h-screen bg-gray-200 rounded-xl'>
                    <div className='flex flex-row font-bold text-3xl text-blue-900 bg-gray-300 rounded-xl py-10 '>
                        <h1 className='text-5xl pl-4' ><FaPeopleGroup /></h1>
                        <h2 className='pl-4 '>Chat {chatroom}</h2>
                    </div>
                    <div className='overflow-auto rounded-xl'>
                        {messages.map((msg, index) => (
                            <div key={index}  className='m-8'>
                                { msg.user && msg.user === user ? 
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
                            id='message'
                            type='text'
                            name='message'
                            value={message}
                            className='w-full py-2 px-2 bg-gray-100 rounded-md text-black'
                            placeholder='Enter your message here'
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
                            required
                        />
                        <button
                            onClick={sendMessage}
                            className='bg-gray-300 px-8 py-2 ml-3 text-black font-bold rounded-xl'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat