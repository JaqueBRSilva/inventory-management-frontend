import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import Error404 from './pages/404/Error404'
import HomePage from './pages/Home/Home'
import Login from './pages/Login/Login'
import Products from './pages/Products/Products'
import Users from './pages/Users/Users'

function App() {
  return (
    <AuthProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  )
}

export default App