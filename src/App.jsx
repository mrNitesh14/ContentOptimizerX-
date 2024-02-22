import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter , Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
