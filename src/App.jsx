import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Error404 from './pages/404/Error404'
import HomePage from './pages/Home/Home'
import Products from './pages/Products/Products'
import Users from './pages/Users/Users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App