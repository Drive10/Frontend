
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import CardForm from "../components/CardForm"
import UpiQR from "../components/UpiQR"

export default function Checkout(){

 const [method,setMethod]=useState("card")
 const nav=useNavigate()

 const pay=()=>{
  nav("/3ds")
 }

 return(

 <div className="flex justify-center items-center min-h-screen">

  <div className="bg-white p-6 rounded w-[420px] space-y-4">

   <h2 className="text-xl font-semibold">Checkout</h2>

   <input className="w-full p-2 border rounded" placeholder="Full Name"/>
   <input className="w-full p-2 border rounded" placeholder="Phone"/>

   <div className="flex gap-2">

    <button
     onClick={()=>setMethod("card")}
     className={"flex-1 p-2 border rounded "+(method==="card"?"bg-blue-600 text-white":"")}>
     Card
    </button>

    <button
     onClick={()=>setMethod("upi")}
     className={"flex-1 p-2 border rounded "+(method==="upi"?"bg-blue-600 text-white":"")}>
     UPI
    </button>

   </div>

   {method==="card" && <CardForm onSubmit={pay}/>}

   {method==="upi" &&
    <div className="space-y-4">
     <UpiQR upi="demo@upi" amount="499"/>
     <button
      className="w-full bg-blue-600 text-white p-2 rounded"
      onClick={()=>nav("/processing")}>
      I Paid
     </button>
    </div>
   }

  </div>

 </div>

 )
}
