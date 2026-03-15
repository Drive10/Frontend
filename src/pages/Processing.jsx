
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import Spinner from "../components/Spinner"

export default function Processing(){

 const nav=useNavigate()

 useEffect(()=>{

  const t=setTimeout(()=>{
   nav("/receipt")
  },3000)

  return()=>clearTimeout(t)

 },[])

 return(
 <div className="flex justify-center items-center min-h-screen">

  <div className="bg-white p-6 rounded text-center">

   <h2 className="mb-4 font-semibold">Processing Payment</h2>

   <Spinner/>

  </div>

 </div>
 )
}
