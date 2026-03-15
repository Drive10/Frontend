
import {useState} from "react"
import {formatCard,luhnCheck} from "../utils/card"

export default function CardForm({onSubmit}){

 const [card,setCard]=useState("")
 const [name,setName]=useState("")
 const [exp,setExp]=useState("")
 const [cvv,setCvv]=useState("")

 const submit=()=>{

  const clean=card.replace(/\s/g,"")

  if(!luhnCheck(clean)){
   alert("Invalid card number")
   return
  }

  onSubmit()

 }

 return(
 <div className="space-y-3">

  <input
   className="w-full p-2 border rounded"
   placeholder="Card Number"
   value={card}
   onChange={e=>setCard(formatCard(e.target.value))}
  />

  <input
   className="w-full p-2 border rounded"
   placeholder="Cardholder Name"
   value={name}
   onChange={e=>setName(e.target.value)}
  />

  <div className="flex gap-2">
   <input
    className="w-full p-2 border rounded"
    placeholder="MM/YY"
    value={exp}
    onChange={e=>setExp(e.target.value)}
   />

   <input
    className="w-full p-2 border rounded"
    placeholder="CVV"
    value={cvv}
    onChange={e=>setCvv(e.target.value)}
   />
  </div>

  <button
   className="w-full bg-blue-600 text-white p-2 rounded"
   onClick={submit}>
   Pay
  </button>

 </div>
 )
}
