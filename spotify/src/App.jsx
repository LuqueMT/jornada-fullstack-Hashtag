import Header from "../components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/page/Home";
import Artists from "../components/page/Artists";
import Artist from "../components/page/Artist";
import Songs from "../components/page/Songs";
import Song from "../components/page/Song";
import Main from "../components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/artists" element={<Artists/>} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/song/:id" element={<Song />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;