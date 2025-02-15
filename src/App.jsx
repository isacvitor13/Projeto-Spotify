import Home from "./pages/Home"
import Header from './components/Header.jsx'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Artists from "./components/Artists.jsx"
import Artist from "./components/Artist.jsx"
import Songs from "./components/Songs.jsx"
import Song from "./components/Song.jsx"

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/artists' element={<Artists />} />
          <Route exact path='/artist/:id' element={<Artist />} />
          <Route exact path='/songs' element={<Songs />} />
          <Route exact path='/song/:id' element={<Song />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
