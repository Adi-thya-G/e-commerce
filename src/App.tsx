

import { Outlet } from "react-router-dom"
import Header from "./pages/Header"

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
