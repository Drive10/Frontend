
import {QRCodeCanvas} from "qrcode.react"

export default function UpiQR({upi,amount}){

 const value=`upi://pay?pa=${upi}&am=${amount}&cu=INR`

 return(
  <div className="text-center space-y-4">
   <QRCodeCanvas value={value} size={200}/>
   <p className="text-sm">Scan using any UPI app</p>
  </div>
 )
}
