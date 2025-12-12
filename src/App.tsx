

import { Outlet } from "react-router-dom"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
function App() {
 
return(
<>
  <Header/>
  <Outlet/>
  <Footer/>
</>
  )
}

export default App
