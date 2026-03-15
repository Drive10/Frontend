
export default function Receipt(){

 return(
 <div className="flex justify-center items-center min-h-screen">

  <div className="bg-white p-6 rounded w-[380px] space-y-3">

   <h2 className="text-xl font-semibold text-green-600">
    Payment Successful
   </h2>

   <p>Transaction ID: TXN928374</p>
   <p>Order ID: ORD123</p>
   <p>Amount: ₹499</p>

   <hr/>

   <p className="text-sm text-gray-500">
    Receipt generated successfully.
   </p>

  </div>

 </div>
 )
}
