import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path ="/" element={<Home></Home>}></Route>
      <Route path ="/portfolio" element={<Portfolio></Portfolio>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
