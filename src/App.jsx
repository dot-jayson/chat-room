import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import ChatRoom from "./pages/ChatRoom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRoute from "./routes/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"


function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/chat' element={
            <PrivateRoute >
              <ChatRoom />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
