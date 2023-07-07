import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'

import Room from './pages/Room'
import Loginpage from './pages/Loginpage'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Room />} />
          </Route>
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
