import Home from "./pages/Home"
import Header from './components/Header.jsx'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
