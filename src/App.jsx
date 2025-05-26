import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Footer from "./components/Footer"
import MentionsLegales from "./pages/LegalNotice"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import ProfilGitHub from "./components/profil"



function App() {

  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path ="/" element={<Home></Home>}></Route>
      <Route path ="/portfolio" element={<Portfolio></Portfolio>}></Route>
      <Route path ="/mentionslegales" element={<MentionsLegales></MentionsLegales>}></Route>
      <Route path ="/contact" element={<Contact></Contact>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/profilGitHub" element={<ProfilGitHub></ProfilGitHub>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
