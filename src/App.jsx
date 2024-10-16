
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Chat from './pages/Chat'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='chat' element={<Chat />} />
        </Routes>
      </Router>
    </>
  )
}

export default App