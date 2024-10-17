import coverImage from '../assets/chat_picture.png'
import logo from '../assets/chat.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [chatRoom, setChatRoom] = useState('')

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/chat')
    }

    return (
        <div className='bg-cover bg-top pt-20 pb-20 h-screen' style={{ backgroundImage: `url(${coverImage})` }}>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col items-center justify-center '>
                    <img src={logo} alt='Logo' className='w-48 h-48 mb-8' />
                    <section className='bg-gray-100 py-8 px-4 md:px-20 mb-4 shadow-md rounded-md border m-4 md:m-0 '>
                        <form onSubmit={onSubmit} className='flex flex-col'>
                            <h1 className='text-3xl pb-8'>Login</h1>
                            <label
                                htmlFor='chatRoom'
                                className='text-gray-700 font-bold mb-2 mr-2'
                            >
                                Chat Room
                            </label>
                            <input
                                type='text'
                                id='chatRoom'
                                name='chatRoom'
                                className='border rounded py-2 px-3 mb-4'
                                placeholder='Chat room name'
                                onChange={(e) => setChatRoom(e.target.value)}
                                required
                            />
                            <label
                                htmlFor='username'
                                className='text-gray-700 font-bold mb-2 mr-2'
                            >
                                Username
                            </label>
                            <input
                                type='text'
                                id='username'
                                name='username'
                                className='border rounded py-2 px-3 mb-4'
                                placeholder='eg. jane sparrow'
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <button
                                className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                                type='submit' >Login</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Login