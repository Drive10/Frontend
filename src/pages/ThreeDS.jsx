
import {useNavigate} from "react-router-dom"

export default function ThreeDS(){

 const nav=useNavigate()

 return(
 <div className="flex justify-center items-center min-h-screen">

  <div className="bg-white p-6 rounded w-[380px] space-y-4 text-center">

   <h2 className="text-lg font-semibold">
    Bank Authentication
   </h2>

   <p>Enter OTP sent by bank</p>

   <input className="w-full p-2 border rounded" placeholder="OTP"/>

   <button
    className="w-full bg-blue-600 text-white p-2 rounded"
    onClick={()=>nav("/processing")}>
    Submit
   </button>

  </div>

 </div>
 )
}
