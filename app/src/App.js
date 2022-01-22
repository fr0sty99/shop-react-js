import HeaderBar from './components/HeaderBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <HeaderBar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </>
  )
}

export default App