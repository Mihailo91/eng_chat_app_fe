
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Chat from './pages/Chat'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App