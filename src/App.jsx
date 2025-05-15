import { BrowserRouter } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
    <Home></Home>
    </BrowserRouter>
  )
}

export default App
