
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Checkout from "./pages/Checkout"
import ThreeDS from "./pages/ThreeDS"
import Processing from "./pages/Processing"
import Receipt from "./pages/Receipt"

export default function App(){
 return(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Checkout/>}/>
    <Route path="/3ds" element={<ThreeDS/>}/>
    <Route path="/processing" element={<Processing/>}/>
    <Route path="/receipt" element={<Receipt/>}/>
   </Routes>
  </BrowserRouter>
 )
}
