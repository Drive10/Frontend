
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Checkout from "./pages/Checkout"
import Processing from "./pages/Processing"
import Receipt from "./pages/Receipt"

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Checkout/>}/>
        <Route path="/processing" element={<Processing/>}/>
        <Route path="/receipt" element={<Receipt/>}/>
      </Routes>
    </BrowserRouter>
  )
}
