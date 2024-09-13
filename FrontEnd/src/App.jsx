import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavBar } from './components/NavBar/NavBar'
import {Shop} from "./pages/Shop/Shop"
import {Cart} from "./pages/Cart/Cart"
import { ShopContextProvider } from "./context/Shop-Context";
import { ProductProvider } from "./context/Product-Context";

function App() {
  return (
    <div className = "App">
      <ProductProvider>
          <ShopContextProvider>
            <Router>
            <NavBar></NavBar>
            <Routes>
              <Route path = "/" element = {<Shop></Shop>}/>
              <Route path = "/Cart" element = {<Cart/>}/>
            </Routes>
          </Router>
        </ShopContextProvider>
      </ProductProvider>
    </div>
  )
}

export default App
