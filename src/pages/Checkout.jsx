
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {formatCard,luhnCheck} from "../utils/card"
import UpiQR from "../components/UpiQR"

export default function Checkout(){

 const nav=useNavigate()

 const [method,setMethod]=useState("card")
 const [card,setCard]=useState("")

 const payCard=()=>{

  const clean=card.replace(/\s/g,"")

  if(!luhnCheck(clean)){
   alert("Invalid card")
   return
  }

  nav("/processing")

 }

 return(

 <div className="flex justify-center items-center min-h-screen">

  <div className="bg-white p-6 rounded w-[420px] space-y-4">

   <h2 className="text-xl font-semibold">Checkout</h2>

   <input className="w-full p-2 border rounded" placeholder="Full Name"/>
   <input className="w-full p-2 border rounded" placeholder="Phone"/>

   <div className="flex gap-2">

    <button
     className={"flex-1 p-2 border rounded "+(method==="card"?"bg-blue-600 text-white":"")}
     onClick={()=>setMethod("card")}>
     Card
    </button>

    <button
     className={"flex-1 p-2 border rounded "+(method==="upi"?"bg-blue-600 text-white":"")}
     onClick={()=>setMethod("upi")}>
     UPI
    </button>

   </div>

   {method==="card" && (
    <div className="space-y-3">
     <input
      className="w-full p-2 border rounded"
      placeholder="Card Number"
      value={card}
      onChange={e=>setCard(formatCard(e.target.value))}
     />
     <button
      className="w-full bg-blue-600 text-white p-2 rounded"
      onClick={payCard}>
      Pay
     </button>
    </div>
   )}

   {method==="upi" && (
    <div className="space-y-4">
     <UpiQR upi="demo@upi" amount="499"/>
     <button
      className="w-full bg-blue-600 text-white p-2 rounded"
      onClick={()=>nav("/processing")}>
      I Paid
     </button>
    </div>
   )}

  </div>

 </div>

 )
}
